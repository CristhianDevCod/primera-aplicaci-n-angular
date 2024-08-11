import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ICartItem } from '../../api/model/i-cart-item';
import { CartService } from '../../api/services/cart.service';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [
        MatTableModule,
        CurrencyPipe,
        DecimalPipe,
        MatIcon
    ],
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent {
    items: ICartItem[] = [];
    displayedColumns = ["image", "title", "price", "quantity", "total", "actions"]

    constructor(private cartService: CartService) {
        this.cartService.getItems()
            .subscribe(data => {
                this.items = data
            });
    }

    delecteItem(id: number){
        this.cartService.deleteItem(id);
        this.items = this.items.filter(i => i.id !== id);
    }
}
