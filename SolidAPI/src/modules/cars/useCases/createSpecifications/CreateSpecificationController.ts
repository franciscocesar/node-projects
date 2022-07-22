import { Response, Request} from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {

    constructor (private createSpecificationController: CreateSpecificationUseCase) {

    }

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createSpecificationController.execute({name, description})
    
        return response.status(201).send();
    }
}

export { CreateSpecificationController }