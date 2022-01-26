import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Compononent } from "./404/error404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Compononent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '**', component: Error404Compononent
            }
            
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}