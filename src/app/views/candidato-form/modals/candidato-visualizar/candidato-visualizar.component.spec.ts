// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CandidatoVisualizarComponent } from './candidato-visualizar.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';

// describe('CandidatoVisualizarComponent', () => {
//   let component: CandidatoVisualizarComponent;
//   let fixture: ComponentFixture<CandidatoVisualizarComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CandidatoVisualizarComponent],
//       imports: [HttpClientTestingModule]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CandidatoVisualizarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should display candidate data', () => {
//     component.candidato = {
//       fullName: 'John Doe',
//       email: 'john.doe@example.com',
//       phone: '123456789'
//     };
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement;
//     expect(compiled.querySelector('mat-card-title').textContent).toContain('John Doe');
//   });
// });
