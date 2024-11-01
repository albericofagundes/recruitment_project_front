// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-candidate-form',
//   templateUrl: './candidate-form.component.html',
//   styleUrls: ['./candidate-form.component.css']
// })
// export class CandidateFormComponent {
//   candidateForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.candidateForm = this.fb.group({
//       fullName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       linkedin: [''],
//       github: [''],
//       address: ['', Validators.required],
//       experience: this.fb.array([
//         this.fb.group({
//           jobTitle: ['', Validators.required],
//           company: ['', Validators.required],
//           startDate: ['', Validators.required],
//           endDate: ['']
//         })
//       ]),
//       education: this.fb.array([
//         this.fb.group({
//           degree: ['', Validators.required],
//           institution: ['', Validators.required],
//           graduationYear: ['', Validators.required]
//         })
//       ]),
//       skills: [''],
//       languages: [''],
//       coverLetter: ['', Validators.maxLength(500)]
//     });
//   }

//   onSubmit() {
//     if (this.candidateForm.valid) {
//       console.log(this.candidateForm.value);
//       // Aqui você pode adicionar a lógica para enviar o formulário.
//     }
//   }
// }
