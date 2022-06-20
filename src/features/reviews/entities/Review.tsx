import Project from "../../projects/entities/Project";

class Review {
    id: number;
    project: Project;
    title: string;
    body: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;

    constructor({
        id,
        project,
        title,
        body,
        rating,
        createdAt,
        updatedAt,
    }: {
        id: number,
        project: Project,
        title: string,
        body: string,
        rating: number
        createdAt: Date,
        updatedAt: Date,
    }) {
        this.id = id;
        this.project = project;
        this.title = title;
        this.body = body;
        this.rating = rating;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default Review;