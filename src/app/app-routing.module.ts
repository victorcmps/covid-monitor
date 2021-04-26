import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'country-details/:id',
    component: CountryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
