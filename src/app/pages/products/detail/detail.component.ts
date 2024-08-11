import { Component, Input, OnChanges, OnInit, SimpleChanges, Pipe, PipeTransform } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../api/services/products.service';
import { Producto } from '../../../api/model/producto';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from '../../../api/services/cart.service';
import { CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-detail',
    standalone: true,
    imports: [ 
        MatChipsModule,
        MatIconModule,
        CurrencyPipe,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
})
export class DetailComponent implements OnInit{
    @Input() id: number = 0;
    product?: Producto;

    constructor(
        private productService: ProductsService,
        private cartService: CartService
    ){

        // el codigo que se habia puesto en el contructor ahora se pone
        // en la implementacion del metodo ngOnInit()
    }

    ngOnInit(): void { // implementando el ciclo de vida de un componente
        this.productService.getById(this.id).subscribe({
            next: data => {
                this.product = data;
                // console.log(data)
            },
            error: err => {
                console.log(err)
            }
        });
    }

    addToCart() {
        // se usa ! para asegurar de que si o si los valores no serán nulos
        this.cartService.addItem({
            id: this.product!.id,
            image: this.product!.image,
            title: this.product!.title,
            price: this.product!.price,
            quantity: 1
        })
    }

    // Lo que se hacia en la version vieja
    // constructor(private activeRoute: ActivatedRoute){
    //     // como es un observable asincrono se hace lo siguiente
    //     // console.log(this.activeRoute.params)
    //     //? Esta es una forma
    //     // this.activeRoute.params.subscribe((parametro) => {
    //     //     console.log(parametro['id'])
    //     // })
    //     //? Esta es otra forma
    //     // const id = this.activeRoute.snapshot.paramMap.get('id');
    //     // console.log(`id: ${id}`)
    // }
}
