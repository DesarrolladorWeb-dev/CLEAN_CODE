import localPosts from '../data/local-database.json'
import { Post } from './05-dependency-b';
// ahora usaremos el principio de inversion de dependencias - habla de las abstracciones - trabajemos con clases abstractas 

export abstract class PostProvider { //Ahora con esto para que algo califique como postProvider

    abstract getPosts(): Promise<Post[]> //importamos la interfaz Post que retornara


}

export class LocalDataBaseService implements PostProvider {

    constructor() {}

    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}
export class JsonDataBaseService implements PostProvider  {
    // leera el archivo json (el backen me dio para leer )
    async getPosts() {
        return localPosts; //leer el archivo y recuperar sus datos
    }
}

export class WebApiPostService implements PostProvider {

    async getPosts(): Promise<Post[]> {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        return  await resp.json();
        
    }

}