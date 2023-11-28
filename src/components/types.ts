export interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  rating: number
  image: string
  discount: string
  quantity?: number
}

export interface CartItem {
  productId: string,
  quantity: number,
  name: string,
  price: number
}