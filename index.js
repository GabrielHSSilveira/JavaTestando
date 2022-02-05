import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {package} from "./package.json"

const cliente1 = new Cliente();

cliente1._nome ="Ricardo";
cliente1._cpf = 11133300046;
cliente1._agencia = 1001;
cliente1._saldo = 0;

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente();

conta2.cliente._nome="Alice";
conta2.cliente._cpf = 22233300046;
conta2.cliente._agencia = 1001;
conta2.cliente._saldo = 0;


console.log(conta2);
