import { Product } from "src/gmProducts/products/product.entity"
import { User } from "src/gmUsers/users/user.entity"

export class Order {
  id: string
  date: Date
  user: User
  products: Product[]
}
