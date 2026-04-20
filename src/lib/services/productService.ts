import { products } from '../data/products'

export const getProducts = async () => {
  return products
}

export const getProductById = async (id: string) => {
  return products.find(p => p.id === id)
}