import { Telefone } from './telefone';
import { Profissao } from './Profissao';

export class User {

	id: Number;
	nome: String;
	login: String;
	senha: String;
	dataNascimento: String;
	cpf: String;
	profissao: Profissao = new Profissao();
	salario: DoubleRange;
	telefones: Array<Telefone>;

}
