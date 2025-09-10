const Usuario = require("./Usuario");

class Administrador extends Usuario {
    constructor(nome, idade){
        super(nome, idade)
        this.produtos = []
    }
    acessoPainel() {
        return 'Acesso ao painel administrativo.'
    }

    adicionarProduto(produto) {
        this.produtos.push(produto)
    }

    removerProduto(produto) {
        const index = this.produtos.findIndex(p => p.nome === produto.nome)
        if (index !== -1) {
            this.produtos.splice(index, 1)
        }
    }

}

module.exports = Administrador