import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {MailService} from '../services/mail.service';
import {NgxSpinnerService} from 'ngx-spinner';

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
    this.mailService.sendContactMail(this.contactForm.value).subscribe(response => {
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
    }, error => {
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
    });
    this.contactForm.reset();
  }
}
