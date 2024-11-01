// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CandidatoService } from '../services/candidato.service';

// @Component({
//   selector: 'app-candidato-visualizar',
//   templateUrl: './candidato-visualizar.component.html',
//   styleUrls: ['./candidato-visualizar.component.css']
// })
// export class CandidatoVisualizarComponent implements OnInit {
//   candidato: any;

//   constructor(
//     private route: ActivatedRoute,
//     private candidatoService: CandidatoService
//   ) {}

//   ngOnInit(): void {
//     const candidatoId = this.route.snapshot.paramMap.get('id');
//     if (candidatoId) {
//       this.candidatoService.getCandidatoById(candidatoId).subscribe((data) => {
//         this.candidato = data;
//       });
//     }
//   }
// }
