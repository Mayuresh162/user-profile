import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    profile_image: '',
  };
  isNew = false;
  @ViewChild('imgInput') imgInput;
  @ViewChild('addUser') addUser: NgForm;

  constructor(public dialogRef: MatDialogRef<any>, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public userDetails: any) { }

  ngOnInit() {
    if (this.userDetails) {
      this.user = this.userDetails;
    }
  }

  save() {
    this.cancel(true);
  }

  cancel(isChanged = false) {
    const paylaod = {
      'user': this.user,
      'isChanged': isChanged
    };
    this.dialogRef.close(paylaod);
  }

  fileChangeEvent(event: any): void {
    const file = event.target.files[0];
    const pathComponents = event.target.value.split('.');
    const type = pathComponents[pathComponents.length - 1].toLowerCase();
    if (type.indexOf('png') === -1 && type.indexOf('jpg') === -1 && type.indexOf('jpeg') === -1) {
      return;
    }

    const that = this;
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.onload = () => {
        if (img.width < 100 || img.height < 100) {
        } else {
          this.user.profile_image = '/assets/image/' + file.name;
          this.addUser.form.markAsDirty();
          console.log(file);
        }
      };
      img.src = fr.result as string;
    };
    fr.readAsDataURL(file);
  }


}
