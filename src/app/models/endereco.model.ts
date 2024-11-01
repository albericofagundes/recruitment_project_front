// endereco.model.ts
export class Endereco {
  rua: string;
  numero: string;
  complemento: string;
  cidade: string;
  estado: string;
  cep: string;

  constructor(
    rua: string = '',
    numero: string = '',
    complemento: string = '',
    cidade: string = '',
    estado: string = '',
    cep: string = ''
  ) {
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }
}
