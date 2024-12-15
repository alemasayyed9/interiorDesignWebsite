import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private fb: FormBuilder){}

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Zahid Sayyed',
    mobile_no: '',
    address: '',
  });

async send(){
  emailjs.init('Z3FQtRp7XG0HKul0i');
  let response = await emailjs.send("service_7p9zy8u","template_2dn1lzw",{
  from_name: this.form.value.from_name,
  to_name: this.form.value.to_name,
  mobile_no: this.form.value.mobile_no,
  address: this.form.value.address,
  });

  alert("Message has been sent");
  this.form.reset();
  
}
}
  