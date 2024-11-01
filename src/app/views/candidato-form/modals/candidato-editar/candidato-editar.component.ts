// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';
// import { CandidatoService } from '../services/candidato.service';

// @Component({
//   selector: 'app-candidato-editar',
//   templateUrl: './candidato-editar.component.html',
//   styleUrls: ['./candidato-editar.component.css'],
// })
// export class CandidatoEditarComponent implements OnInit {
//   candidatoForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private candidatoService: CandidatoService
//   ) {
//     this.candidatoForm = this.fb.group({
//       fullName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       linkedin: [''],
//       github: [''],
//       address: ['', Validators.required],
//       experience: this.fb.array([this.createExperienceGroup()]),
//       education: this.fb.array([this.createEducationGroup()]),
//       skills: [''],
//       languages: [''],
//       coverLetter: ['', Validators.maxLength(500)],
//     });
//   }

//   ngOnInit(): void {
//     const candidatoId = this.route.snapshot.paramMap.get('id');
//     if (candidatoId) {
//       this.candidatoService.getCandidatoById(candidatoId).subscribe((data) => {
//         this.populateForm(data);
//       });
//     }
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
//       endDate: [''],
//     });
//   }

//   createEducationGroup(): FormGroup {
//     return this.fb.group({
//       degree: ['', Validators.required],
//       institution: ['', Validators.required],
//       graduationYear: ['', Validators.required],
//     });
//   }

//   populateForm(data: any): void {
//     this.candidatoForm.patchValue({
//       fullName: data.fullName,
//       email: data.email,
//       phone: data.phone,
//       linkedin: data.linkedin,
//       github: data.github,
//       address: data.address,
//       skills: data.skills,
//       languages: data.languages,
//       coverLetter: data.coverLetter,
//     });
//     data.experience.forEach(() =>
//       this.experience.push(this.createExperienceGroup())
//     );
//     data.education.forEach(() =>
//       this.education.push(this.createEducationGroup())
//     );
//   }

//   onSubmit(): void {
//     if (this.candidatoForm.valid) {
//       const candidatoId = this.route.snapshot.paramMap.get('id');
//       this.candidatoService
//         .updateCandidato(candidatoId, this.candidatoForm.value)
//         .subscribe(() => {
//           alert('Informações do candidato atualizadas com sucesso!');
//         });
//     }
//   }
// }
