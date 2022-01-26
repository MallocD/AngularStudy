import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';//Módulo de rotas

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Compononent } from './404/error404.component';
import { CourseInforComponente } from './courses/courses.info.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Compononent,
    CourseInforComponente,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path:'courses/info/:id', component : CourseInforComponente
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Compononent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
