interface ProductProps {
  id: number
  title: string
  price: number
}

interface ProductCartProps extends ProductProps {  
  qtd: number
}

type CartProps = Array<ProductCartProps>

