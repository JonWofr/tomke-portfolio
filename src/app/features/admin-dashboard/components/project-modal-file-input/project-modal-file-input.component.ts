import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'admin-dashboard-project-modal-file-input',
  templateUrl: './project-modal-file-input.component.html',
  styleUrls: ['./project-modal-file-input.component.scss'],
})
export class ProjectModalFileInputComponent implements OnInit {
  @Input() placeholderLabel = '';
  @Input() multipleImages = false;
  @Output() changeImageFileInput = new EventEmitter<FileList>();

  constructor() {}

  ngOnInit(): void {}

  onChangeFileInput(fileList: FileList | null) {
    if (!fileList) return;
    this.changeImageFileInput.emit(fileList);
  }
}
