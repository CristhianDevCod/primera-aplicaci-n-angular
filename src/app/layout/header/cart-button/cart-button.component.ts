import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../../api/services/cart.service';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-cart-button',
    standalone: true,
    imports: [
        MatBadgeModule, 
        MatIcon,
        RouterLink
    ],
    templateUrl: './cart-button.component.html',
    styleUrl: './cart-button.component.css',
})
export class CartButtonComponent {

    constructor(private cartService: CartService){
        // this.count = this.cartService.getCount() 
    }

    get count(){
        return this.cartService.getCount();
    }
}
