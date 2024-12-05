import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  template: `
    <div>
      <h2>Template-Driven Form</h2>
      <form #userForm="ngForm" (ngSubmit)="onTemplateSubmit(userForm)">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" ngModel required />
        <span *ngIf="userForm.controls['name']?.invalid && userForm.controls['name']?.touched">
          Name is required.
        </span>
        <br />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" ngModel required />
        <span *ngIf="userForm.controls['email']?.invalid && userForm.controls['email']?.touched">
          Valid email is required.
        </span>
        <br />

        <button type="submit" [disabled]="userForm.invalid">Submit</button>
      </form>

      <p *ngIf="templateFormData">Submitted Data: {{ templateFormData | json }}</p>
    </div>

    <div>
      <h2>Reactive Form</h2>
      <form [formGroup]="reactiveForm" (ngSubmit)="onReactiveSubmit()">
        <label for="rname">Name:</label>
        <input type="text" id="rname" formControlName="name" />
        <span *ngIf="reactiveForm.get('name')?.invalid && reactiveForm.get('name')?.touched">
          Name is required.
        </span>
        <br />

        <label for="remail">Email:</label>
        <input type="email" id="remail" formControlName="email" />
        <span *ngIf="reactiveForm.get('email')?.invalid && reactiveForm.get('email')?.touched">
          Valid email is required.
        </span>
        <br />

        <button type="submit" [disabled]="reactiveForm.invalid">Submit</button>
      </form>

      <p *ngIf="reactiveFormData">Submitted Data: {{ reactiveFormData | json }}</p>
    </div>
  `,
})
export class AppComponent {
  templateFormData: any;
  reactiveForm: FormGroup;
  reactiveFormData: any;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onTemplateSubmit(form: any) {
    if (form.valid) {
      this.templateFormData = form.value;
      console.log('Template-Driven Form Data:', this.templateFormData);
    }
  }

  onReactiveSubmit() {
    if (this.reactiveForm.valid) {
      this.reactiveFormData = this.reactiveForm.value;
      console.log('Reactive Form Data:', this.reactiveFormData);
    }
  }
}
