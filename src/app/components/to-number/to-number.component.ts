import { Component } from '@angular/core';
import { Example } from 'src/app/models/example';
import { Convertion } from 'src/app/models/convertion';

@Component({
    selector: 'app-to-number',
    templateUrl: '../../views/app.aplication.html',
    styleUrls: ['./to-number.component.scss']
})

export class ToNumberComponent {
    public title:string;
    public summary:string;
    public errorMessage:string;
    public examples:Array<Example>;
    public inputValue:string;
    public result:string;
    public regex:RegExp;
    public convertor:Convertion;

    constructor(){
        this.title = 'Convert Roman notation to numbers';
        this.summary = `Here you can find some examples of Roman notation and the expected convertion into numbers. To transform a Roman notation, fill the input under the examples and click on "Convert" button`;
        this.result = '';
        this.errorMessage = '';
        this.inputValue = '';
        this.regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
        this.convertor = new Convertion;
    
        this.examples = [
            new Example('LXX', '70'),
            new Example('MCMLXXXIV', '1984'),
            new Example('CXLII', '142'),
            new Example('DCLXXVIII', '678'),
            new Example('MMMCMXCIX', '3999')
        ];
    }

    startConvertion(){
        var value = this.inputValue.toString().toUpperCase();
        var finalValue = 0;
        this.errorMessage = '';
        this.result = '';

        if(value == '' || value == null){
            this.errorMessage = 'The input value cannot be empty';
        }

        if (!this.regex.test(value)) {
            this.errorMessage = 'The input value must be a valid Roman number';
        } else {
            let separateValue = value.split('');
            
            for (let key in separateValue){
                let characterValue = this.convertor.getNumber(separateValue[parseInt(key)]);

                if (parseInt(key) + 1 < separateValue.length && characterValue < this.convertor.getNumber(separateValue[parseInt(key) + 1])){
                    finalValue -= characterValue;
                } else {
                    finalValue += characterValue;
                }
            }

            this.result = finalValue.toString();
        }
    }
}
