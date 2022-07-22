
import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
    constructor (private listSpecificationUseCase: ISpecificationsRepository) {}

    execute() : Specification[] {
        const allSpecifications = this.listSpecificationUseCase.list()
        return allSpecifications
    }
}

export { ListSpecificationUseCase}