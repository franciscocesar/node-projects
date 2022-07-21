import { Specification } from "../model/Specification";

interface ICreateScpecificationsDTO {
    name: string;
    description:string;
}

interface ISpecificationsRepository {
    create({description, name}: ICreateScpecificationsDTO) : void;
    list() : Specification[]
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateScpecificationsDTO}