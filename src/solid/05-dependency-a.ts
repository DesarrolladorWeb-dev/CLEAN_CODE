import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {
    // ahora usaremos el principio de inversion de dependencias - habla de las abstracciones - trabajemos con clases abstractas 
    // const provider = new LocalDataBaseService()

    const provider = new WebApiPostService

    const postService = new PostService(provider); 

    const posts = await postService.getPosts();

    console.log({ posts })


})();