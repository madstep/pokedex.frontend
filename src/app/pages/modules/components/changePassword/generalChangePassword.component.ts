import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-generalChangePassword',
  templateUrl: './generalChangePassword.component.html',
  styleUrls: ['./generalChangePassword.component.sass']
})

export class GeneralChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Save(){
    this.ModalAlertSave();
  }

  ModalAlertSave(){
    Swal.fire({
      title: 'Are you sure they want to save the changes?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#007bff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Saved!',
          'Your record has been saved.',
          'success'
        )
      }
    })

  }
}
