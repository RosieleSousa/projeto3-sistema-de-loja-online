const Usuario = require('./class/Usuario')
const Cliente = require('./class/Cliente')
const Administrador = require('./class/Administrador')
const Produto = require('./class/Produto')
const Pedido = require('./class/Pedido')

const user = new Usuario('Ryo', 16)
const admin = new Administrador('Everson', 28)
const cust = new Cliente('Ren', 17)

const p1 = new Produto('camisa', 49.99, 12000)
const p2 = new Produto('Saia', 29.99, 5000)

user.acessoPainel()
console.log('===============================')

admin.adicionarProduto(p1)
admin.adicionarProduto(p2)
console.log(admin.acessoPainel())
console.log(`Produtos cadastros pelo Administrador:`)
console.log(admin.produtos)
console.log('===============================')


cust.adicionarProduto(p1)
cust.adicionarProduto(p2)
console.log(cust.acessoPainel())
console.log(`Carrinho do cliente:`)
console.log(cust.carrinho)
const pedido = new Pedido(cust, cust.carrinho)
console.log(`Valor total do pedido: ${pedido.calcularTotal()}`)
