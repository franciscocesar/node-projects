import { response, Router } from 'express'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

import multer from 'multer'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'


const categoriesRoutes = Router()

const upload = multer({
    dest: "./tmp"
})


categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

categoriesRoutes.post('/import',upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res)
})

export { categoriesRoutes }