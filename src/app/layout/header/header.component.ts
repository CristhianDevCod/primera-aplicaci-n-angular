import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CartButtonComponent } from './cart-button/cart-button.component';

@Component({
    selector: 'app-layout-header',
    standalone: true,
    imports: [
        MatIconModule, 
        MatButtonModule, 
        MatToolbarModule,
        CartButtonComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent {
    name = 'My E-shop'
}
