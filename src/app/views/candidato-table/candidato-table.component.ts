import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { CandidatoModel } from '../../models/candidatos.model'; // Importe seu modelo

@Component({
  selector: 'app-candidato-table',
  templateUrl: './candidato-table.component.html',
  standalone: true,
  imports: [MatIconModule, MatTableModule],
})
export class CandidatoTableComponent {
  @Input() candidatos: CandidatoModel[] = []; // Altere para usar CandidatoModel
  displayedColumns: string[] = ['name', 'email', 'address', 'phone', 'actions'];

  openModal(action: string, candidato: CandidatoModel) {
    // Implementar lógica para abrir o modal
    console.log(action, candidato);
  }
}
