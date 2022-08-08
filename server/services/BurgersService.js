import { FakeBurgerDB } from "../db/FakeBurgerDB";

class BurgersService {
    async getAllBurgers() {
        return FakeBurgerDB.burgers
    }

    async createBurger(burgerData){
        burgerData.id = FakeBurgerDB.burgers.length
        FakeBurgerDB.burgers.push(catData)
        return catData
    }


}

export const burgersService = new BurgersService()