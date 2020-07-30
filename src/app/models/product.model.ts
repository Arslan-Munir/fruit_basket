
export class Product{
    id: number;
    name: string;
    price: number;
    description: string;
    mainPhotoUrl: string;
    photos: string[];

    constructor(id: number, name: string, price: number, description: string, mainPhotoUrl: string, photos: string[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.mainPhotoUrl = mainPhotoUrl;
        this.photos = photos;
    }
}
