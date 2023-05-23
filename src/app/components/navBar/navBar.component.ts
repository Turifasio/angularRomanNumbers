import { Component, Output, EventEmitter } from '@angular/core';
import { Option } from '../../models/options';

@Component({
    selector: 'app-navBar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.scss', '../../../styles.scss']
})

export class navBarComponent {
    public options:Array<Option>;
    
    @Output() optionSelected = new EventEmitter();

    constructor(){
        this.options = [
            new Option('To Roman', true),
            new Option('To Numbers', false)
        ];
    }

    changeOption(option:string) {
        if(option == 'To Roman'){
            this.optionSelected.emit(option);
        }else{
            this.optionSelected.emit(option);
        }

        this.updateOptionActive(option);
    }

    updateOptionActive(optionName:string) {
        this.options.forEach(option => {
            if(option.title == optionName){
                option.active = true;
            }else{
                option.active = false;
            }
        });
    }
}