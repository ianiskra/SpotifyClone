export class HelloWorldService {
    private visits: number = 0;

    public sayHello(): string {
        return `Hello World from service: ${this.visits++} visits`;
    }
}