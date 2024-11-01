import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CandidatoModel } from '../../models/candidatos.model';
import { Subscription } from 'rxjs';
import { CandidatoService } from '../../services/candidato.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css'],
  standalone: true,
  imports: [MatIconModule, MatTableModule, HttpClientModule, CommonModule],
})
export class CandidatoFormComponent {
  private subscription: Subscription = new Subscription();

  public candidatos: CandidatoModel[] = [];

  constructor(
    private dialog: MatDialog,
    private candidatoService: CandidatoService
  ) {}

  ngOnInit(): void {
    this.inicializarDados();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private inicializarDados() {
    this.obterListaCandidatos();
  }

  private obterListaCandidatos() {
    this.subscription = this.candidatoService.obterListaCandidatos().subscribe({
      next: (response) => {
        let success = response.success as boolean;
        if (response) {
          this.candidatos = response;
          console.log('Lista de candidatos:', this.candidatos);
        } else {
          console.warn('Requisição bem-sucedida, mas response.success é falso');
        }
      },
      error: (error) => {
        console.error('Erro ao buscar candidatos:', error);
      },
      complete: () => {
        console.log('Requisição de candidatos completa');
      },
    });
  }

  openModalView(candidato: CandidatoModel) {
    // this.dialog.open(CandidatoVisualizarComponent, { data: candidato });
  }

  openModalEdit(candidato: CandidatoModel) {
    // this.dialog.open(CandidatoEditarComponent, { data: candidato });
  }

  openModalCadastrar() {
    // this.dialog.open(CandidatoCadastrarComponent);
  }
}
