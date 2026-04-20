export interface Product {
  id: string
  name: string
  category: 'roller' | 'per_cvt' | 'per_sentri' | 'paket'
  description: string
  compatibility: string
  use_case: string
  benefits: string
  image: string
}