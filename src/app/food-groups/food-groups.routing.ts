import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FoodGroupGuardService } from '../services/food-group-guard.service';
import { FruitDetailComponent } from './food-detail/fruit-detail/fruit-detail.component';
import { GrainsDetailComponent } from './food-detail/grains-detail/grains-detail.component';
import { ProteinDetailComponent } from './food-detail/protein-detail/protein-detail.component';
import { VegetableDetailComponent } from './food-detail/vegetable-detail/vegetable-detail.component';
import { FoodGroupsComponent } from './food-groups.component';


export const foodGroupsRoutes: Routes = [
    {
        path: '',
        canActivateChild: [ FoodGroupGuardService ],
        children: [
            {
                path: '',
                component: FoodGroupsComponent,
                outlet: 'foodGroupOutlet'
            },
            {
                path: 'protein',
                component: ProteinDetailComponent,
            },
            {
                path: 'fruit',
                component: FruitDetailComponent
            },
            {
                path: 'vegetables',
                component: VegetableDetailComponent
            },
            {
                path: 'grains',
                component: GrainsDetailComponent
            }
        ]}
];

@NgModule({
    imports: [
        RouterModule.forChild(
            foodGroupsRoutes)
    ],
    exports: [
        RouterModule
    ],
})

export class FoodGroupsRoutingModule {
}
