class AnimalTwo {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    public run(){
        console.log('i am Animal I can run');
    }
}

class Snake extends AnimalTwo {
    constructor(name: string) {
        super(name);
        console.log(this);
        this.name = "child " + name;
    }
    public run(){
        console.log('i am Snake I can Run')
    }
}
const snake = new Snake("snake");
const animal = new AnimalTwo("animal");
console.log(snake);
console.log(animal);
snake.run();
animal.run();



