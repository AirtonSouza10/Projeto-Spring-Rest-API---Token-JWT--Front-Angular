import { Telefone } from './telefone';

export class User {

	id: Number;
	nome: String;
	login: String;
	senha: String;
	telefones: Array<Telefone>;

}
