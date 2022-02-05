export class ContaCorrente{

    _agencia;
    _cliente;
    _saldo = 0;


    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= 0){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(this._saldo <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}