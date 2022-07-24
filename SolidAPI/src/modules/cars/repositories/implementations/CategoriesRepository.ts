import { Category } from '../../model/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';



class CategoriesRepository implements ICategoriesRepository { 
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor(){
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository {
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }

        return CategoriesRepository.INSTANCE;
    }

    create({description, name} : ICreateCategoryDTO) {
        const category = new Category()

        Object.assign(category, {
            name,
            description,
            createdAt: new Date()
        })
    
        this.categories.push(category)
    }

    list(): Category[] {
        return this.categories
    }

    findByName(name: string): Category {
        const category = this.categories.find(item => item.name === name)

        return category
    }
}

export { CategoriesRepository }