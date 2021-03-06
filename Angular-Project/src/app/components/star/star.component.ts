import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
    
})
export class StarComponent implements OnChanges{

    @Input()//Receber o valor de um componenete externo
    rating: number = 0;
    
    starWidht: number;

    ngOnChanges(): void {

        this.starWidht = this.rating * 74/5;

}
}