// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CandidatoEditarComponent } from './candidato-editar.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';

// describe('CandidatoEditarComponent', () => {
//   let component: CandidatoEditarComponent;
//   let fixture: ComponentFixture<CandidatoEditarComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CandidatoEditarComponent],
//       imports: [ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CandidatoEditarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have a valid form when fields are filled', () => {
//     component.candidatoForm.controls['fullName'].setValue('John Doe');
//     component.candidatoForm.controls['email'].setValue('john.doe@example.com');
//     component.candidatoForm.controls['phone'].setValue('123456789');
//     expect(component.candidatoForm.valid).toBeTruthy();
//   });
// });
