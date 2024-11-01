import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoCadastroComponent } from './candidato-cadastro.component';

describe('CandidatoCadastroComponent', () => {
  let component: CandidatoCadastroComponent;
  let fixture: ComponentFixture<CandidatoCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatoCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
