/*
    QUESTÃO - 2704. Ser ou não ser
*/

type TobeOrNotTobe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
}

function expect(val: any): TobeOrNotTobe {
    return  {
        toBe: function(valOther) {
            if (valOther === val) {
                return true
            } else {
                throw new Error('Not Equal');
            }
        }, 
        notToBe: function(valOther) {
            if (valOther !== val) {
                return true
            } else {
                throw new Error('Equal')
            }
        }
    }
}

const equal = expect(3).toBe(3);
const notEqual = expect(50).notToBe(5)

console.log(equal);
console.log(notEqual);
