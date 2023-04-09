import { Telefone } from './telefone';

export class User {

	id: Number;
	nome: String;
	login: String;
	senha: String;
	dataNascimento: String;
	cpf: String;
	telefones: Array<Telefone>;

}
