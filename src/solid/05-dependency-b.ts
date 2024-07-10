import { JsonDataBaseService, LocalDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    // aqui usamos injeccion de dependencias 
    // Ahora usamos la clase Abstracta porque yo quiero usar diferentes tipos de provedores
    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        // const jsonDB = new JsonDataBaseService();
        // this.posts = await jsonDB.getPosts();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}