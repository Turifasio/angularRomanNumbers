import { Component } from '@angular/core';
import { Example } from '../../models/example';
import { Convertion } from 'src/app/models/convertion';

@Component({
    selector: 'app-to-roman',
    templateUrl: '../../views/app.aplication.html',
    styleUrls: ['./to-roman.component.scss']
})

export class ToRomanComponent {
    public title:string;
    public summary:string;
    public errorMessage:string;
    public examples:Array<Example>;
    public inputValue:string;
    public result:string;
    public convertor:Convertion;

    constructor(){
        this.title = 'Convert numbers to Roman notation';
        this.summary = 'Here you can find some examples of numbers and the expected convertion into Roman notation. To transform a number, fill the input under the examples and click on "Convert" button';
        this.result = '';
        this.errorMessage = '';
        this.inputValue = '';
        this.convertor = new Convertion;
    
        this.examples = [
            new Example('70', 'LXX'),
            new Example('1984', 'MCMLXXXIV'),
            new Example('142','CXLII'),
            new Example('678','DCLXXVIII'),
            new Example('3999','MMMCMXCIX')
        ];
    }

    startConvertion(){
        var value = parseInt(this.inputValue);
        this.errorMessage = '';
        this.result = '';

        if(!Number.isInteger(value)){
            this.errorMessage = 'The input value must be valid';
        }

        if(value <= 0 || value >= 4000){
            this.errorMessage = 'The number must be between 1 and 3999';
        }else{
            var finalValue = '';

            while(value > 0){
                if(value >= 1000) {
                    value -= 1000;
                    finalValue = finalValue + this.convertor.getRoman(1000);
                } else if(value >= 900) {
                    value -= 900;
                    finalValue = finalValue + this.convertor.getRoman(100);
                    finalValue = finalValue + this.convertor.getRoman(1000);
                } else if(value >= 500) {
                    value -= 500;
                    finalValue = finalValue + this.convertor.getRoman(500);
                } else if(value >= 400) {
                    value -= 400;
                    finalValue = finalValue + this.convertor.getRoman(100);
                    finalValue = finalValue + this.convertor.getRoman(500);
                } else if(value >= 100) {
                    value -= 100;
                    finalValue = finalValue + this.convertor.getRoman(100);
                } else if(value >= 90) {
                    value -= 90;
                    finalValue = finalValue + this.convertor.getRoman(10);
                    finalValue = finalValue + this.convertor.getRoman(100);
                } else if(value >= 50) {
                    value -= 50;
                    finalValue = finalValue + this.convertor.getRoman(50);
                } else if(value >= 40) {
                    value -= 40;
                    finalValue = finalValue + this.convertor.getRoman(10);
                    finalValue = finalValue + this.convertor.getRoman(50);
                } else if(value >= 10) {
                    value -= 10;
                    finalValue = finalValue + this.convertor.getRoman(10);
                } else if(value >= 9) {
                    value -= 9;
                    finalValue = finalValue + this.convertor.getRoman(1);
                    finalValue = finalValue + this.convertor.getRoman(10);
                } else if(value >= 5) {
                    value -= 5;
                    finalValue = finalValue + this.convertor.getRoman(5);
                } else if(value >= 4) {
                    value -= 4;
                    finalValue = finalValue + this.convertor.getRoman(1);
                    finalValue = finalValue + this.convertor.getRoman(5);
                } else {
                    value -= 1;
                    finalValue = finalValue + this.convertor.getRoman(1);
                }
            }

            this.result = finalValue.toString();
        }
    }
}
