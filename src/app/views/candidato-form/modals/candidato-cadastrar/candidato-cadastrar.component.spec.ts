import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoCadastrarComponent } from './candidato-cadastrar.component';

describe('CandidatoCadastrarComponent', () => {
  let component: CandidatoCadastrarComponent;
  let fixture: ComponentFixture<CandidatoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatoCadastrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
