// 1 - Criar o Contexto
// 2 - Disponibilizar (Prover) para toda aplicação
// 3 - Ler e Manipular o meu Contexto

import { ReactNode, createContext, useContext, useState } from "react";

interface CartContextProps {
  cart: CartProps
  addCart: (product: ProductProps) => void
  removeCart: (product: ProductProps) => void
}
const CartContext = createContext<CartContextProps>({
  addCart: () => {},
  removeCart: () => {},
  cart: []
})

type CartProviderProps = {
  children: ReactNode
}
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartProps>([])

  const addCart = (product: ProductProps) => {
    setCart([...cart, {
      ...product,
      qtd: 1
    }])
  }
  
  const removeCart = (product: ProductProps) => {
    setCart(cart.filter(cart => cart.id !== product.id))
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
