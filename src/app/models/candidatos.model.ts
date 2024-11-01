import { Contato } from './contato.model';
import { DadosPessoais } from './dados-pessoais.model';
import { ExperienciaProfissional } from './experiencia-profissional.model';
import { FormacaoAcademica } from './formacao-academica.model';

export interface CandidatoModel {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cargo: string;

  contato: Contato;
  experienciasProfissionais: ExperienciaProfissional[];
  formacoesAcademicas: FormacaoAcademica[];

  skills?: string[];
  languages?: string[];
  coverLetter?: string;
}
