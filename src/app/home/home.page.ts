import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonInput,IonCard,IonText,IonButton,IonIcon,IonItem} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonInput,IonCard,ReactiveFormsModule,IonText,IonButton,IonIcon,IonItem],
})
export class HomePage {

  form!: FormGroup;
  isPwd=false;

  constructor() {
    this.initForm();

  }
  initForm(){
    this.form = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),]),
  });
  }
   togglePwd(){
     this.isPwd = !this.isPwd;
   }
   onSubmit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
