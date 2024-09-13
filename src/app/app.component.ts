import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrdersModule } from './orders/orders.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'ecommerce-product-crud-pages';
}
