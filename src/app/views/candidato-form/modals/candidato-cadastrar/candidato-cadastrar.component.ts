// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

// @Component({
//   selector: 'app-candidato-cadastro',
//   templateUrl: './candidato-cadastro.component.html',
//   styleUrls: ['./candidato-cadastro.component.css']
// })
// export class CandidatoCadastrarComponent {
//   candidatoForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.candidatoForm = this.fb.group({
//       fullName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       linkedin: [''],
//       github: [''],
//       address: ['', Validators.required],
//       experience: this.fb.array([
//         this.createExperienceGroup()
//       ]),
//       education: this.fb.array([
//         this.createEducationGroup()
//       ]),
//       skills: [''],
//       languages: [''],
//       coverLetter: ['', Validators.maxLength(500)]
//     });
//   }

//   get experience(): FormArray {
//     return this.candidatoForm.get('experience') as FormArray;
//   }

//   get education(): FormArray {
//     return this.candidatoForm.get('education') as FormArray;
//   }

//   createExperienceGroup(): FormGroup {
//     return this.fb.group({
//       jobTitle: ['', Validators.required],
//       company: ['', Validators.required],
//       startDate: ['', Validators.required],
//       endDate: ['']
//     });
//   }

//   createEducationGroup(): FormGroup {
//     return this.fb.group({
//       degree: ['', Validators.required],
//       institution: ['', Validators.required],
//       graduationYear: ['', Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.candidatoForm.valid) {
//       console.log(this.candidatoForm.value);
//       alert("Cadastro concluído com sucesso!");
//       this.candidatoForm.reset();
//     }
//   }
// }
