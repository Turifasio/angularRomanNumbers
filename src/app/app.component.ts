import { Component } from '@angular/core';
import { trigger, state, style, animate,transition } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('openClose', [
            // ...
            state('open', style({
                opacity: 1,
            })),
            state('closed', style({
                opacity: 0
            })),
            transition('open => closed', [
              animate('0.1s')
            ]),
            transition('closed => open', [
              animate('1s')
            ]),
        ]),
    ]
})

export class AppComponent {
    public romanVisible:boolean;
    public numberVisible:boolean;

    constructor(){
        this.romanVisible = true;
        this.numberVisible = false;
    }

    changeOption(option:string){
        if(option == 'To Roman'){
            this.romanVisible = true;
            this.numberVisible = false;
        }else{
            this.romanVisible = false;
            this.numberVisible = true;
        }
    }
}
