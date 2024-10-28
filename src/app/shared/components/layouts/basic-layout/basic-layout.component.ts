import { Component } from '@angular/core';
import { CandidatoFormComponent } from '../../../../views/candidato-form/candidato-form.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [CandidatoFormComponent, HeaderComponent, FooterComponent],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css',
})
export class BasicLayoutComponent {}
