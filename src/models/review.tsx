class Review {
    id: number;
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.id = Math.random();
        this.title = title;
        this.content = content;
    }
}

export default Review;