import { Router } from 'express'
import { Category } from '../model/Category'

const categoriesRoutes = Router()

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const category = new Category()

    Object.assign(category, {
        name,
        description,
        createdAt: new Date()
    })

    categories.push(category)

    return res.status(201).json({category})

})


export { categoriesRoutes }