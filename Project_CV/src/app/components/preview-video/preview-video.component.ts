import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preview-video',
  templateUrl: './preview-video.component.html',
  styleUrls: ['./preview-video.component.css']
})
export class PreviewVideoComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PreviewVideoComponent>, @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    console.log("dataaa", this.data)
  }

}
