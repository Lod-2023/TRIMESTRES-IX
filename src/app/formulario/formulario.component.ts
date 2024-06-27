import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service.js'; // Ajusta la ruta según la ubicación de tu servicio

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  form!: FormGroup;
  isPwd = false;

  constructor(private productService: ProductService) {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  togglePwd() {
    this.isPwd = !this.isPwd;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value); // Aquí podrías enviar los datos del formulario a través de servicios, API, etc.
  }

  createNewProduct(nombre: string, precio: number, cantidad: number, referencia: string) {
    this.productService.createNewProduct(nombre, precio, cantidad, referencia);
  }

  clearInputs() {
    this.form.reset();
  }
}
