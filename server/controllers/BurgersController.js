import { burgersService } from "../services/BurgersService"
import BaseController from "../utils/BaseController"

export class BurgersController extends BaseController{

    
    constructor() {
        super('api/burgers')
        this.router
        .get('', this.getAllBurgers)
        .post
}

async getAllBurgers(req, res, next) {
    try {
        let burgers = await burgersService.getAllBurgers()
        res.send(burgers)
    } catch (error) {
        next(error)
    }
}

async createCat(req, res, next) {
    try {
        let burgerData = req.body
        let burger = await burgersService.createBurger(burgerData)
        res.send(burger)
    } catch (error) {
        next(error)
    }
}


}
