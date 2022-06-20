import Project from "../entities/Project";

const PROJECTS: Project[] = [
    new Project({
        id: 1,
        title: 'Optimism',
        image: 'https://www.business2community.com/wp-content/uploads/2022/06/optimism-logo.png',
        rating: 89,
        // createdAt: Date.now(),
    }),
    new Project({
        id: 2,
        title: 'Arbitrum',
        image: 'https://miro.medium.com/max/1200/1*uDneNARNqdafkVxt5bxVuA.jpeg',
        rating: 95,
        // createdAt: Date.now(),        
    }),
    new Project({
        id: 3,
        title: 'zkSync',
        image: 'https://pbs.twimg.com/profile_images/1228405960835813378/eH3FdBKB_400x400.jpg',
        rating: 82,
        // createdAt: Date.now(),  
    }),
];

export default PROJECTS;