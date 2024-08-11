import { Component, Input } from '@angular/core';
import {
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Producto } from '../../../api/model/producto';
import { MatChipsModule } from '@angular/material/chips';
import { Route, Router } from '@angular/router';
import { CartService } from '../../../api/services/cart.service';

@Component({
    selector: 'app-producto',
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatCardContent,
        MatCardActions,
        MatIcon,
        MatChipsModule,
    ],
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.css',
})
export class ProductoComponent {
    @Input({ required: true }) producto!: Producto;

    constructor(
        private router: Router,
        private cartService: CartService
    ){}

    viewItem() {
        this.router.navigate(['productos', this.producto.id])
    }

    addToCart(){
        this.cartService.addItem({
            id: this.producto!.id,
            image: this.producto!.image,
            title: this.producto!.title,
            price: this.producto!.price,
            quantity: 1
        })
    }
}
