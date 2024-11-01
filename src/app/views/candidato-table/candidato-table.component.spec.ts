import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoTableComponent } from './candidato-table.component';

describe('CandidatoTableComponent', () => {
  let component: CandidatoTableComponent;
  let fixture: ComponentFixture<CandidatoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatoTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
