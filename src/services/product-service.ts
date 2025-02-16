import { inject, injectable } from 'tsyringe'
import { FlavorRepository, DrinkRepository, CrustRepository } from '@/repositories/index.js'

@injectable()
export class ProductService {
  constructor(
    @inject(FlavorRepository) private flavorRepo: FlavorRepository,
    @inject(DrinkRepository) private drinkRepo: DrinkRepository,
    @inject(CrustRepository) private crustRepo: CrustRepository,
  ) {}

  async getPizzaFlavors() {
    return this.flavorRepo.getAllFlavors()
  }

  async getDrinks() {
    return this.drinkRepo.getAllDrinks()
  }

  async getCrusts() {
    return this.crustRepo.getAllCrusts()
  }

  // Métodos adicionais conforme necessário
}
