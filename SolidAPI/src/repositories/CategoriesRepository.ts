import { Category } from '../model/Category'

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesRepository { 
    private categories: Category[];

    constructor(){
        this.categories = [];
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