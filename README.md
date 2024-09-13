#### Angular Routing
New commands in angular:
##### Task 1: Create module without routing file
   
```bash
ng generate module user
```
  (or)
```bash
ng g m user
```

##### Task 2: Create components in that module
```bash
ng g c user/add-user
ng g c user/list-user
```

##### Task 3: Create module with routing
```bash
ng g m payment --routing
```

##### Reference

```ts
import { Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { ViewProductComponent } from './products/view-product/view-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ViewUserComponent } from './user/view-user/view-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

  // { path: 'products/add', component: AddProductComponent },
  // { path: 'products/list', component: ListProductComponent },
  // { path: 'products/P1', component: ViewProductComponent },
  // { path: 'products/P1/edit', component: EditProductComponent },
  // { path: '', redirectTo: '/products/list', pathMatch: 'full' }

  {
    path: 'products',
    children: [
      { path: '', component: ListProductComponent },
      { path: 'add', component: AddProductComponent },
      { path: 'P1', component: ViewProductComponent },
      { path: 'P1/edit', component: EditProductComponent },
    ]
  },
  {
    path: 'users', children: [
      { path: '', component: ListUserComponent },
      { path: 'U1', component: ViewUserComponent },
      { path: 'U1/edit', component: EditUserComponent }
    ]
  },
  { path: '', redirectTo: '/products/list', pathMatch: 'full' },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'payments', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
  { path: '**', component: PageNotFoundComponent }
];

// Performance tuning
// Lazy loading - load the module and its childs pages only if any one user requested the page
```
