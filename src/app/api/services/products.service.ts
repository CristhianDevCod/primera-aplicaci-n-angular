import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    private Base_Url:string = "https://fakestoreapi.com/products";
    // Nueva forma 
    // private _http = inject(HttpClient);

    // recibe un objeto de tipo HttpClient * se hacia en Angular 17
    constructor(private http: HttpClient) {}

    getAll(){
        return this.http.get<Producto[]>(this.Base_Url)
    }

    getAllCategories(){
        return this.http.get<string[]>(`${this.Base_Url}/categories`);
    }

    getByCategory(categoria:string){
        return this.http.get<Producto[]>(`${this.Base_Url}/category/${categoria}`);
    }

    getById(id:number){
        return this.http.get<Producto>(`${this.Base_Url}/${id}`)
    }
}
