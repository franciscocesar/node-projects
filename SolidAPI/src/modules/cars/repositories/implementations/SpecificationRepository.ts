import { Specification } from "../../model/Specification";
import { ICreateScpecificationsDTO, ISpecificationsRepository } from "../ISpecificationRepository";


class SpecificationRepository implements ISpecificationsRepository{
    private specifications: Specification[];

    private static INSTANCE: SpecificationRepository

    constructor(){
        this.specifications = []
    }
    public static getInstance(): SpecificationRepository {
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository()
        }

        return SpecificationRepository.INSTANCE;
    }
    list(): Specification[] {
        return this.specifications
    }
    findByName(name: string): Specification {
        const specification = this.specifications.find(item => item.name === name)
        
        return specification
    }


    create({ description, name }: ICreateScpecificationsDTO): void {
        const specification = new Specification()

        Object.assign(specification, {
            name, 
            description,
            createdAt: new Date()
        } )

        this.specifications.push(specification)
    }
    
}

export { SpecificationRepository }