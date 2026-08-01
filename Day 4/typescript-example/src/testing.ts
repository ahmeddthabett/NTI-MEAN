
const numbers: number[] = [1,2,3,4,5];

numbers.forEach((num) =>{
    console.log(num * 2);
})

//************************************************* */

let user: [string, number] = ['Ahmed', 20];

//************************************************* */

enum Size{
    Small = 's',
    Medium = 'm',
    Large = 'l'
}

console.log(Size.Large);

//************************************************* */

function greet(name: string): void{
    console.log(`hello: ${name}!`);
}

function add(a: number, b: number, c?: number): number{
    if(c == undefined){
        return a+b;
    }
    return a+b+c;
}

//************************************************* */

const employee:{
    name: string,
    age: number,
    position: string,
    department: string,
    retire_date: (date: Date) => void
}={
    name: 'Ahmed Thabet',
    age: 20,
    position: 'Software Engineer',
    department: 'IT',
    retire_date: (date: Date) =>{
        console.log(`${employee.name} will retire on ${date.toDateString()}`);
    }
};

employee.retire_date(new Date('2035-12-31'));


//****************************************** */


type employee = {
    name: string,
    age: number,
    position: string,
    department: string,
    retire_date: (date: Date) => void
};

const employeeOne: employee={
    name: 'Ahmed Thabet',
    age: 20,
    position: 'Software Engineer',
    department: 'IT',
    retire_date: (date: Date) =>{
        console.log(`${employee.name} will retire on ${date.toDateString()}`);
    }
};

employee.retire_date(new Date('2035-12-31'));


//**************************************** */

type Draggable ={
    drag: () => void;
}

type Resizable ={
    resize: () => void;
}

type UIwindow = Draggable & Resizable;

/* const window: Draggable & Resizable{
    drag: () => {
            console.log("Dragbling the window");
    }
,
const Resize: () => {
    resize: () => void;
}
} */

//************************************************** */

type Direction = 'up' | 'down' | 'left' | 'right';
type LoginStatus = 'pending' | 'in-progress' | 'completed'; 

type Response = {
    status: LoginStatus;
    message: string;
}

const my_direction: Direction = 'up';
console.log(my_direction);



