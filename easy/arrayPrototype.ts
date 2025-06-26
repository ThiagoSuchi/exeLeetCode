/*
   QUESTÃO - 2619. Último protótipo de matriz
*/

interface Array<T> {
   last(): T;
}

Array.prototype.last = function() {
   return this.length === 0 ? -1 : this[this.length - 1];
}

const arr: any = [null, {}, 3];
const lenght = arr.last();

console.log(lenght);


