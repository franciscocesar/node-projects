import { Router} from "express";
import { listSpecificationController } from "../modules/cars/useCases/listSpecifications";
import { specificationController } from "../modules/cars/useCases/createSpecifications";

const specificationsRoutes = Router()


specificationsRoutes.post('/', (req, res) => {
    return specificationController.handle(req, res)
})
specificationsRoutes.get('/', (req, res) => {
    return listSpecificationController.handle(req, res)
})

export { specificationsRoutes }