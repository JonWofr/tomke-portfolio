import * as functions from 'firebase-functions';
import * as path from 'path';
import * as os from 'os';
import * as fs from 'fs';
import * as admin from 'firebase-admin';
import * as sharp from 'sharp';

const sizes = [500, 1000, 2000];

export const scaleImage = async (object: functions.storage.ObjectMetadata) => {
  const fileBucket = object.bucket;
  const filePath = object.name;
  const contentType = object.contentType;

  if (!contentType || !filePath) {
    return functions.logger.log('Missing file information.');
  }

  if (!contentType.startsWith('image/')) {
    return functions.logger.log('This is not an image.');
  }

  const fileName = path.basename(filePath);
  const fileNameParts = fileName.split('.');

  if (fileNameParts.length === 0) {
    return functions.logger.log('Missing file extension.');
  }

  const extension = fileNameParts[fileNameParts.length - 1];
  const fileNameWithoutExtension = fileNameParts.slice(0, -1).join('.');
  const fileNameWithoutExtensionParts = fileNameWithoutExtension.split('-');

  if (
    fileNameWithoutExtensionParts.length > 0 &&
    sizes.includes(
      parseInt(
        fileNameWithoutExtensionParts[fileNameWithoutExtensionParts.length - 1]
      )
    )
  ) {
    return functions.logger.log(`File ${fileName} is already a resized image.`);
  }

  const bucket = admin.storage().bucket(fileBucket);
  const localOriginImagePath = path.join(os.tmpdir(), fileName);
  const metadata = {
    contentType,
  };
  await bucket.file(filePath).download({ destination: localOriginImagePath });
  functions.logger.log('Image downloaded locally to', localOriginImagePath);

  await Promise.all(
    sizes.map(async (size) => {
      const targetImageFilename = `${fileNameWithoutExtension}-${size}.${extension}`;

      const localTargetImagePath = path.join(os.tmpdir(), targetImageFilename);

      await sharp(localOriginImagePath)
        .resize({ width: size })
        .toFile(localTargetImagePath);

      const remoteTargetImagePath = path.join(
        path.dirname(filePath),
        targetImageFilename
      );

      await bucket.upload(localTargetImagePath, {
        destination: remoteTargetImagePath,
        metadata,
      });

      fs.unlinkSync(localTargetImagePath);
    })
  );

  return fs.unlinkSync(localOriginImagePath);
};
