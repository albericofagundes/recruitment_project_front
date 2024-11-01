export class ExperienciaProfissional {
  cargo: string;
  empresa: string;
  periodoInicio: Date;
  periodoFim?: Date;
  descricao?: string;

  constructor(
    cargo: string = '',
    empresa: string = '',
    descricao: string = '',
    periodoInicio: Date = new Date(),
    periodoFim: Date = new Date()
  ) {
    this.cargo = cargo;
    this.empresa = empresa;
    this.descricao = descricao;
    this.periodoInicio = periodoInicio;
    this.periodoFim = periodoFim;
  }
}
