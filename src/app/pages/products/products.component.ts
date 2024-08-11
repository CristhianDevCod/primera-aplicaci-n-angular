import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from '../../api/services/products.service';
import { Producto } from '../../api/model/producto';
import { ProductoComponent } from './producto/producto.component';
import { 
    MatButtonToggleGroup,
    MatButtonToggle
} from '@angular/material/button-toggle';

@Component({
    selector: 'app-pages-products',
    standalone: true,
    imports: [
        ProductoComponent,
        MatButtonToggleGroup,
        MatButtonToggle
    ],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
})
export class ProductsComponent {

    // Se pondrán todos los artículos de la api
    productos:Producto[] = [];
    categorias:string[] = [];

    constructor(private productService: ProductsService){
        // Hay dos formas una donde una donde le envio una funcion y otra un objeto
        this.productService.getAll().subscribe({
            next: data => {
                // console.log("Productos:", data)
                this.productos = data;
            },
            error: error => {
                console.log(`Hubo un error: ${error}`)
            }
        });

        this.productService.getAllCategories().subscribe({
            next: data => {
                // console.log("categorias:", data)
                this.categorias = data;
            },
            error: error => {
                console.log(`Hubo un error: ${error}`)
            }
        });
    }

    onCategoryChange(value: string){
        if(value){
            this.productService.getByCategory(value).subscribe({
                next: data => {
                    // console.log("Productos:", data)
                    this.productos = data;
                },
                error: error => {
                    console.log(`Hubo un error: ${error}`)
                }
            });
        } else {
            this.productService.getAll().subscribe({
                next: data => {
                    // console.log("Productos:", data)
                    this.productos = data;
                },
                error: error => {
                    console.log(`Hubo un error: ${error}`)
                }
            });
        }
    }
}
