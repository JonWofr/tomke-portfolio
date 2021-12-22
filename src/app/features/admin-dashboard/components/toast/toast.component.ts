import { Component, Input, OnInit } from '@angular/core';
import { ToastType } from '@features/admin-dashboard/enums/toast-type.enum';

@Component({
  selector: 'admin-dashboard-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  @Input() type?: ToastType;
  @Input() message?: string;

  ToastType = ToastType;

  constructor() {}

  ngOnInit(): void {}
}
