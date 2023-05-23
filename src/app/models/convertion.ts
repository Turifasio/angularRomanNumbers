export class Convertion {
    public romanToNumber:Object;
    public numberToRoman:Object;

    constructor() {
        this.romanToNumber = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000 
        }; 

        this.numberToRoman = {
            1: 'I',
            5: 'V',
            10: 'X',
            50: 'L',
            100: 'C',
            500: 'D',
            1000: 'M' 
        };  
    }

    getRoman(number:number):any {
        var returnValue = null;

        Object.entries(this.numberToRoman).forEach(([key, value]) => {
            if(parseInt(key) === number) {
                returnValue = value;
            }
        });

        return returnValue;
    }

    getNumber(roman:string):any {
        var returnValue = 0;

        Object.entries(this.romanToNumber).forEach(([key, value]) => {
            if(key === roman) {
                returnValue = value;
            }
        });

        return returnValue;
    }
}