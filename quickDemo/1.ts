interface IShape {
    color: string;
}
const square = {} as IShape;

square.color = "123";
console.log(square);

// 混合类形  为函数和对象提供
interface ICounter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): ICounter {
    const counter = ((start: number) => "123") as ICounter;
    counter.interval = 123;
    counter.reset = () => {
        console.log(123);
    };
    return counter;
}
let etCounter = getCounter();
etCounter(12);
etCounter.reset();
etCounter.interval = 5;

// 函数类型  这里会报错
interface IForFun {
    (name?: string, age?: number): string;
    Num?: number;
}
let modelFun: IForFun;
modelFun = function createPerson(name: string, age: number) {
    return "this is person~~";
};
modelFun("123");

// 函数类型 断言解决 参数报错问题
interface IForFuncTwo {
    (name?: string, age?: number): string;
    Num: number;
}

let Create = ((name: string) => console.log(123)) as IForFuncTwo;

// 测试断言  下面具有这样的情况 
interface ITest {
    props1: number;
    props2: string;
}
// let TestOne: Test = { props1: "123" };  // 报错
let TestTow = { props1: 12 } as ITest;
let TestThree = {  } as ITest;
