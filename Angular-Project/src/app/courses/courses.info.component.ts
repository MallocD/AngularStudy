import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './courses.info.component.html'
})
export class CourseInforComponente implements OnInit{
    
    course: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){//Pega a informaçõa de ID em tempo real

    }
    
    ngOnInit(): void {
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);
        
    }
    save(): void {
        this.courseService.save(this.course);
    }

}