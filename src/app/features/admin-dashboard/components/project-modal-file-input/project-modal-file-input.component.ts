import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'admin-dashboard-project-modal-file-input',
  templateUrl: './project-modal-file-input.component.html',
  styleUrls: ['./project-modal-file-input.component.scss'],
})
export class ProjectModalFileInputComponent implements OnInit {
  @Input() multipleImages = false;
  @Output() changeImageFileInput = new EventEmitter<FileList>();
  fileInputId = uuidv4();

  constructor() {}

  ngOnInit(): void {}

  onChangeFileInput(fileList: FileList | null) {
    if (!fileList) return;
    this.changeImageFileInput.emit(fileList);
  }
}
