import { Endereco } from './endereco.model';

export class Contato {
  email: string;
  telefone: string;
  endereco: Endereco;

  constructor(
    email: string = '',
    telefone: string = '',
    endereco: Endereco = new Endereco()
  ) {
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}
