import { useCart } from "../../contexts/CartProvider"

export default function CartList () {
  const { cart, removeCart } = useCart()

  return (
    <div>
      <hr />
      <h1>Carrinho</h1>

      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <p>
              {item.title}
              <button onClick={() => removeCart(item)}>Remover</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
