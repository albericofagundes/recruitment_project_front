export class FormacaoAcademica {
  instituicao: string;
  curso: string;
  periodoInicio: Date;
  periodoFim?: Date;

  constructor(
    instituicao: string = '',
    curso: string = '',
    periodoInicio: Date = new Date()
  ) {
    this.instituicao = instituicao;
    this.curso = curso;
    this.periodoInicio = periodoInicio;
  }
}
