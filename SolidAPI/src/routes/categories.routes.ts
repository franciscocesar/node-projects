import { response, Router } from 'express'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'


const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository)

    createCategoryService.execute({name, description})


    return res.status(201).send();
})

categoriesRoutes.get("/", (req, res) => {
    const allCategories = categoriesRepository.list()
    return res.json(allCategories)
})

export { categoriesRoutes }