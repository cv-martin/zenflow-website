import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BillingComponent } from './pages/billing/billing.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { OmnichannelComponent } from './pages/omnichannel/omnichannel.component';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { PricingComponent } from './pages/pricing/pricing.component';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), title: 'Zenflow | Modern Retail ERP' },
  { path: 'billing', loadComponent: () => import('./pages/billing/billing.component').then(m => m.BillingComponent), title: 'Billing Software | Zenflow', data: { breadcrumb: 'Billing' } },
  { path: 'inventory', loadComponent: () => import('./pages/inventory/inventory.component').then(m => m.InventoryComponent), title: 'Inventory Management | Zenflow', data: { breadcrumb: 'Inventory' } },
  { path: 'omnichannel', loadComponent: () => import('./pages/omnichannel/omnichannel.component').then(m => m.OmnichannelComponent), title: 'Omnichannel Selling | Zenflow', data: { breadcrumb: 'Omnichannel' } },
  { path: 'accounting', loadComponent: () => import('./pages/accounting/accounting.component').then(m => m.AccountingComponent), title: 'Retail Accounting | Zenflow', data: { breadcrumb: 'Accounting' } },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent), title: 'Pricing | Zenflow', data: { breadcrumb: 'Pricing' } },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent), title: 'About Us | Zenflow' },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent), title: 'Contact | Zenflow' },
  { path: '**', redirectTo: '' }
];
