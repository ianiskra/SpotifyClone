import { HelloWorldService } from "../services/helloworld-service";

export class HelloWorldController {
    private service: HelloWorldService;

    public constructor() {
        this.service = new HelloWorldService();
    }
    
    public sayHello(req: any, res: any, next: any) {
        console.log('this', this)
        res.send(this.service.sayHello());
    }
}