"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(num * 2);
});
//************************************************* */
let user = ['Ahmed', 20];
//************************************************* */
var Size;
(function (Size) {
    Size["Small"] = "s";
    Size["Medium"] = "m";
    Size["Large"] = "l";
})(Size || (Size = {}));
console.log(Size.Large);
//************************************************* */
function greet(name) {
    console.log(`hello: ${name}!`);
}
function add(a, b, c) {
    if (c == undefined) {
        return a + b;
    }
    return a + b + c;
}
//************************************************* */
const employee = {
    name: 'Ahmed Thabet',
    age: 20,
    position: 'Software Engineer',
    department: 'IT',
    retire_date: (date) => {
        console.log(`${employee.name} will retire on ${date.toDateString()}`);
    }
};
employee.retire_date(new Date('2035-12-31'));
const employeeOne = {
    name: 'Ahmed Thabet',
    age: 20,
    position: 'Software Engineer',
    department: 'IT',
    retire_date: (date) => {
        console.log(`${employee.name} will retire on ${date.toDateString()}`);
    }
};
employee.retire_date(new Date('2035-12-31'));
const my_direction = 'up';
console.log(my_direction);
//# sourceMappingURL=testing.js.map