import * as React from "react";
interface IclassInterface {
  name: string;
} // 类检查

class Demo extends React.Component implements IclassInterface {
    public name:string = '234';
    public render() {
        return <div>我是demo</div>;
    }
    public componentDidMount() {
        console.log(this.name); 
        this.test();
        const x: [string, number] = ["112", 2];
        const b: [string, number] = ["123", 2];
        console.log(b);
        x[3] = "132";
        x[3] = 132;

        // any 方法
        const notSure: any = 4;
        // (notSure as string).substring(0, 2); // 这里是检查不出来错误的 断言也还是错误
        console.log(notSure);

        // void
        function Hello(): void {
            console.log("do somethiing");
            return undefined;
        }
        console.log(Hello);

        const Avoid: void = undefined;
        console.log(Avoid);

        const someValue: any = "12321";
        const StringLength: number = (someValue as string).length;
        console.log(StringLength)

        // 接口
        interface INoExist {
            color?: string;
            width?: number;
        }
        function CreateSqure(myParam: INoExist) {
            if (myParam.color) {
                console.error("123");
            }
            console.log("123");
        }
        CreateSqure({ color: "red" });
        // 只读属性
        interface IPoint {
            readonly x: number;
            readonly y: number;
        }
        const P1: IPoint = { x: 19, y: 12 };

        // 断言来解决这个问题
        interface IPointNoreadOnly {
            x?: number;
            y?: number;
        }
        const P2 = P1 as IPointNoreadOnly;
        P2.x = 123;

        // 普通断言
        const numberT: number = 12;
        // console.log((numberT as string).length); 是无法将number断言为string
        console.log(numberT);

        // 类型检查额外的属性 只是为了绕开 当我们不应该去绕开这些靠谱的检查
        interface ISquareConfig {
            color?: string;
            width?: number;
            [proName: string]: any;
        }
        function createSqaure(param: ISquareConfig) {
            console.error("chuxian");
        }
        createSqaure({ color: "123", opcity: "123" });

        // 函数类型

        
    }
    private test() {
        return "s";
    }
}

export default Demo;
