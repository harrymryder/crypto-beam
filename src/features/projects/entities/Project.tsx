class Project {
    id: number;    
    title: string;
    image: string;
    rating: number;
    reviewsCount?: number;    

    constructor({ 
        id, 
        title, 
        image,
        rating,
        reviews 
    }: { 
        id: number, 
        title: string, 
        image: string, 
        rating: number,
        reviews?: number 
    }) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.rating = rating;
        this.reviewsCount = reviews;
    }
}

export default Project;