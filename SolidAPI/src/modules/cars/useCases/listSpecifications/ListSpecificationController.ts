import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";


class ListSpecificationController { 
    constructor(private listSpecificationController: ListSpecificationUseCase){}

    handle(request: Request, response: Response) {
        const all = this.listSpecificationController.execute()
        return response.json(all)
    }
}

export { ListSpecificationController }