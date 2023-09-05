import { useCart } from "../../contexts/CartProvider"

export default function ProductList () {
  const products: ProductProps[] = [
    {
      id: 1,
      title: 'Produto 1',
      price: 10
    },
    {
      id: 2,
      title: 'Produto 2',
      price: 12.5
    },
    {
      id: 3,
      title: 'Coxinha',
      price: 4.5
    },
  ]

  const { addCart, cart } = useCart()

  return (
    <div>
      <h1>Produtos - {cart.length}</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>
              {product.title} - {product.price}
              <button onClick={() => addCart(product)}>ADD</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}