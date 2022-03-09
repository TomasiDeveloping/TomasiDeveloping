import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {MailService} from '../services/mail.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Mail} from "../models/mail";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private mailService: MailService, private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.spinnerService.show().then();
    const mail: Mail = {
      name: this.contactForm.controls['firstName'].value + ' ' + this.contactForm.controls['lastName'].value,
      subject: this.contactForm.controls['subject'].value,
      senderAddress: this.contactForm.controls['email'].value,
      receiverAddress: 'info@tomasi-developing.ch',
      message: this.contactForm.controls['message'].value
    };
    this.mailService.sendContactMail(mail).subscribe({
      next: ((response) => {
        if (response) {
          this.spinnerService.hide().then();
          Swal.fire({
            toast: true,
            position: 'bottom-right',
            title: 'Kontaktformular',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            html: 'Formular wurde erfolgreich gesendet.',
            icon: 'success'
          }).then();
        } else {
          this.spinnerService.hide().then();
          Swal.fire({
            toast: true,
            position: 'bottom-right',
            title: 'Kontaktformular',
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
            html: 'Formular konnte nicht gesendet werden!',
            icon: 'error'
          }).then();
        }
      }), error: (error) => {
        this.spinnerService.hide().then();
        Swal.fire({
          toast: true,
          position: 'bottom-right',
          title: 'Kontaktformular',
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          html: error.message,
          icon: 'error'
        }).then();
      }
    });
    this.contactForm.reset();
  }
}
