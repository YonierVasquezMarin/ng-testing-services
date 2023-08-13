import { TestBed } from "@angular/core/testing";
import { ProductsService } from "./product.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from "src/app/models";
import { environment } from "src/environments/environment";

fdescribe('ProductsService', () => {
    let productsService: ProductsService;
    let httpController: HttpTestingController;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductsService]
        });
        productsService = TestBed.inject(ProductsService);
        httpController = TestBed.inject(HttpTestingController);
    });
    
    it('should be created', () => {
        expect(productsService).toBeTruthy();
    });

    describe('test getAll method', () => {
        it('should return a product list', (doneFn) => {
            // data
            const mockProducts: Product[] = [
                {
                    id: '1',
                    title: 'Product 1',
                    price: 100,
                    description: 'Product 1 description',
                    category: {
                        id: 1,
                        name: 'Category 1'
                    },
                    images: ['image1', 'image2']
                }
            ]

            // action
            productsService.getAllSimple().subscribe((products) => {
                expect(products.length).toEqual(mockProducts.length);
                doneFn();
            });

            // catch http request
            const url = `${environment.API_URL}/api/v1/products`;
            const req = httpController.expectOne(url);
            req.flush(mockProducts);
        })
    })
})