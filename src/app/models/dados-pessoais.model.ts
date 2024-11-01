// dados-pessoais.model.ts
export class DadosPessoais {
  nome: string;
  dataNascimento: Date;
  nacionalidade?: string;
  estadoCivil?: string;

  constructor(nome: string = '', dataNascimento: Date = new Date()) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }
}
