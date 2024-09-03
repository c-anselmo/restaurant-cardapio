import { produtos } from "../dados/data-produtos.js";

export const buscarProduto = (textoDigitado) => {
    return produtos.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoDigitado.toLowerCase())
    )
  }

export const filtrarProdutos = (categoria) => {
    return produtos.filter((produto) => produto.categoria === categoria)
}

export const produtosEntradas = filtrarProdutos("Entradas")