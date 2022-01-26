import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PipeModule } from "../components/pipe/pipe.module";
import { StarModules } from "../components/star/star.module";
import { CoreModule } from "../core/core.module";
import { CourseListComponent } from "./course-list.component";
import { CourseInforComponente } from "./courses.info.component";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInforComponente,

    ],
    imports: [
        CommonModule,
        FormsModule,
        PipeModule,
        StarModules,
        RouterModule.forChild([
            {
            path: 'courses', component: CourseListComponent
            },
            {
            path:'courses/info/:id', component : CourseInforComponente
            }
        ])

    ]
})
export class CourseModule{

}