import { Injectable } from '@angular/core';
import { ICartItem } from '../model/i-cart-item';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {

    private items: ICartItem[] = [];

    constructor() { this.loadItems() }

    private loadItems() {
        // Lo siguiente se asegura de que si esta vacio devolvera un arreglo vacio
        const cart = localStorage.getItem('cart') || '[]';
        if(cart){
            this.items = JSON.parse(cart)
        }
    }

    private saveItems(){
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    getCount(){
        if(this.items.length === 0){
            return 0;
        }

        return this.items.map(i => i.quantity)
            .reduce((acumulador, valorActual) => {
                return acumulador += valorActual 
            }, 0)
    }

    addItem(item: ICartItem) {
        const index = this.items.findIndex(i => {
            return i.id === item.id
        });

        if(index >= 0){
            this.items[index].quantity += item.quantity;
            this.items[index].total = this.items[index].quantity * this.items[index].price;
        } else {
            item.total = item.quantity * item.price;
            this.items.push(item)
        }

        this.saveItems();
    }

    deleteItem(id: number) {
        this.items = this.items.filter(item => {
            return item.id !== id;
        });

        this.saveItems();
    }

    getItems(){
        return of(this.items)
    }
}
