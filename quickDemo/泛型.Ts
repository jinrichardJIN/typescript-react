function identity<T>(arg:T):T{
    return arg;
}
identity(0);

const outType =  identity<string>('string');

// 和上面的进行对比
let helloWorld:number = 1;
const acceptH = helloWorld;

// funciton
function typeTest(stringNoKye:string){
    return stringNoKye+2;
}
const typeTestA = typeTest('123');
// 数组泛型
function loggingIdentity<T>(arg:T[]):T[]{
    console.log(arg.length);
    return arg;
}
const acceptLogging = loggingIdentity(['string',1]);

// 泛型类型
function identityType<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identityType;

myIdentity(1);