class Animal {
    public static sayYourName(){
        console.log('这是一个静态方法');
    }
    public move(distance:number = 0){
        console.log('I can move ');
    }
}
console.log(Animal.sayYourName);
class Dog extends Animal{
    constructor(){
        super();
    }
    public bark(){
        console.log('WOOF WOOf');
    }
}
const dog = new Dog();

dog.bark();
dog.move(10);
dog.bark();


