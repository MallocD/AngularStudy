import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // selector: 'app-course-list',//Tag do html/Componente//A referência passa a ser via de rotas
    templateUrl: './course-list.component.html',
    
})
export class CourseListComponent implements OnInit{

    filteredCourses : Course[] = [];

    _courses : Course[] = [];

    _filterBy: string;//Váriavel vai ficar somente no componente

    constructor(private courseService: CourseService){//Injeção da dependencia por meio de um construtor

    }

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();//Chamando o métdo
        this.filteredCourses = this._courses;

    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course : Course)=>
        course.code.toLowerCase().indexOf(this._filterBy.toLowerCase())> -1)

    }

    get filter(){
        return this._filterBy;
    }



}