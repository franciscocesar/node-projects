import { Router} from "express";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationRepository

specificationsRoutes.post('/', (req, res) => {
    const {name, description} = req.body

    const createSpecificationService = new CreateSpecificationService(specificationsRepository)

    createSpecificationService.execute({name, description})

    return res.status(201).send()
})
specificationsRoutes.get('/', (req, res) => {
    const allSpecifications = specificationsRepository.list()
    return res.json(allSpecifications)
})

export { specificationsRoutes }