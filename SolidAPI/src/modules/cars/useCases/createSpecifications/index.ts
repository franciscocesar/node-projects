import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationRepository = SpecificationRepository.getInstance()

const createSpecificationUseCases = new CreateSpecificationUseCase(specificationRepository)

const specificationController = new CreateSpecificationController(createSpecificationUseCases)


export {specificationController}