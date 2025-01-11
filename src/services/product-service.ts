import type { Category } from '../config/enums.js'
import initialProducts from '../database/products.json' with { type: 'json' }

export class ProductService {
  private products = initialProducts

  getProducts(category?: Category) {
    if (!category) {
      return this.products.filter((item) => item.isAvailable)
    }

    return this.products.filter(
      (item) => item.category === category && item.isAvailable,
    )
  }

  getProduct(id: number) {
    return (
      this.products.find((item) => item.id === id && item.isAvailable) || null
    )
  }

  // TODO: implement the method: createProduct, updateProduct, and deleteProduct
}
