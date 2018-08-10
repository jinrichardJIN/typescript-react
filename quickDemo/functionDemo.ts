// 可选参数的时候 可以不能指定参数类型
const addSome = (x: number = 3, y = "123") => {
    return x + y;
};
addSome(1, '12');

// 数组泛型
function Test(arg:Array<string|number>):number{
    console.log(arg);
    return arg.length;
}
Test([123123,123,'string']);