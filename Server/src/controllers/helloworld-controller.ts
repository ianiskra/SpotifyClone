export class HelloWorldController {
    public static sayHello(req: any, res: any, next: any) {
        res.send("Hello World from Controller");
    }
}