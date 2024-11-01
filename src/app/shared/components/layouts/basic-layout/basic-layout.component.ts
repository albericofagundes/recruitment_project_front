import { Component } from '@angular/core';
import { CandidatoFormComponent } from '../../../../views/candidato-form/candidato-form.component';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CandidatoService } from '../../../../services/candidato.service';

@Component({
  selector: 'app-basic-layout',
  standalone: true,
  imports: [
    CandidatoFormComponent,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
  ],
  providers: [CandidatoService],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css',
})
export class BasicLayoutComponent {}
