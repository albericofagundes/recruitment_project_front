// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CandidatoCadastroComponent } from './candidato-cadastro.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';

// describe('CandidatoCadastroComponent', () => {
//   let component: CandidatoCadastroComponent;
//   let fixture: ComponentFixture<CandidatoCadastroComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ CandidatoCadastroComponent ],
//       imports: [ ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CandidatoCadastroComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('form should be invalid when empty', () => {
//     expect(component.candidatoForm.invalid).toBeTruthy();
//   });

//   it('should validate email field', () => {
//     const email = component.candidatoForm.controls['email'];
//     email.setValue('invalid-email');
//     expect(email.invalid).toBeTruthy();

//     email.setValue('valid.email@example.com');
//     expect(email.valid).toBeTruthy();
//   });

//   it('should add a new experience form group', () => {
//     const experienceArray = component.experience;
//     component.experience.push(component.createExperienceGroup());
//     expect(experienceArray.length).toBe(2);
//   });
// });
