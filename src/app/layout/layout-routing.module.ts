import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


import { PreviewComponent } from '../preview/preview.component';
import { EnviromentComponent } from '../preview/environment.component';
import { DataBaseComponent } from '../preview/database.component';
import { CongratsComponent } from '../preview/congrats.component';
const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent,
    children: [
      { path: 'preview',  data: {
          title: 'Preview'
        } ,children: [
          {
            path: ':id',
            component: PreviewComponent,
            data: {
              title: 'Preview'
            }
          },
        ]}
      ,

      { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'chart', loadChildren: '../charts/charts.module#ChartsModule' },
      { path: 'ecommerce', loadChildren: '../ecommerce/ecommerce.module#ECommerceModule' },
      { path: 'form', loadChildren: '../forms/forms.module#MyFormsModule' },
      { path: 'page', loadChildren: '../pages/pages.module#PagesModule' },
      { path: 'pglayout', loadChildren: '../page-layouts/page-layouts.module#PageLayoutsModule' },
      { path: 'table', loadChildren: '../tables/tables.module#MyTablesModule' },
      { path: 'ui', loadChildren: '../ui/ui.module#UIModule' },
    ]
  }
];

export const LayoutRoutingModule = RouterModule.forChild(routes);