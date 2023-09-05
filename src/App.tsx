/*
Crie um aplicativo de carrinho de compras onde os itens adicionados ao carrinho são exibidos em diferentes partes da interface.
Crie um componente <CartProvider /> que atuará como o provedor de contexto. Ele deve conter o estado do carrinho de compras (itens adicionados) e funções para adicionar e remover itens.
O componente <CartProvider /> deve renderizar seus componentes filhos e fornecer o estado do carrinho e as funções de adição/remoção através do contexto.
Crie um componente <ProductList /> que exiba uma lista de produtos disponíveis para compra. Cada produto deve ter um botão "Adicionar ao carrinho" que chama a função de adicionar item fornecida pelo contexto.
Crie um componente <Cart /> que exiba os itens adicionados ao carrinho. Cada item deve ter um botão "Remover" que chama a função de remoção de item fornecida pelo contexto.
Neste exercício, o componente <CartProvider /> gerenciará o estado do carrinho de compras e fornecerá funções para adicionar e remover itens através do contexto. Os componentes <ProductList /> e <Cart /> não precisam gerenciar o estado do carrinho, apenas usar as funções fornecidas pelo contexto para interagir com ele. Você pode usar o seu primeiro mini projeto de base para o exercício. Você pode colocar funções como valor de um contexto.
*/

import CartList from "./components/CartList"
import ProductList from "./components/ProductList"
import { CartProvider } from "./contexts/CartProvider"

function App() {
  return (
    <CartProvider>
      <ProductList />
      <CartList />
    </CartProvider>
  )
}

export default App
