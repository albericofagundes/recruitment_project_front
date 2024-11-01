// import { Component, Inject } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-candidato-modal',
//   template: `
//     <h2 mat-dialog-title>{{ modalTitle }}</h2>
//     <form [formGroup]="form" (ngSubmit)="onSubmit()">
//       <mat-form-field>
//         <mat-label>Nome</mat-label>
//         <input matInput formControlName="name" [readonly]="isViewMode"/>
//       </mat-form-field>
//       <mat-form-field>
//         <mat-label>Email</mat-label>
//         <input matInput formControlName="email" [readonly]="isViewMode"/>
//       </mat-form-field>
//       <mat-form-field>
//         <mat-label>Endereço</mat-label>
//         <input matInput formControlName="address" [readonly]="isViewMode"/>
//       </mat-form-field>
//       <mat-form-field>
//         <mat-label>Telefone</mat-label>
//         <input matInput formControlName="phone" [readonly]="isViewMode"/>
//       </mat-form-field>
//       <div mat-dialog-actions>
//         <button mat-button (click)="onClose()">Cancelar</button>
//         <button mat-button type="submit" *ngIf="!isViewMode">{{ actionButtonLabel }}</button>
//       </div>
//     </form>
//   `,
// })
// export class CandidatoModalComponent {
//   form: FormGroup;
//   isViewMode = this.data.mode === 'view';
//   actionButtonLabel = this.data.mode === 'create' ? 'Salvar' : 'Atualizar';
//   modalTitle = this.data.mode === 'create' ? 'Novo Cadastro' : this.data.mode === 'edit' ? 'Editar Cadastro' : 'Visualizar';

//   constructor(
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<CandidatoModalComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any
//   ) {
//     this.form = this.fb.group({
//       name: [data.candidato?.name || ''],
//       email: [data.candidato?.email || ''],
//       address: [data.candidato?.address || ''],
//       phone: [data.candidato?.phone || ''],
//     });
//   }

//   onClose() {
//     this.dialogRef.close();
//   }

//   onSubmit() {
//     if (this.form.valid) {
//       this.dialogRef.close(this.form.value);
//     }
//   }
// }
