import { LoginService } from '../services/login-service';

export class LoginController {
    private service: LoginService;

    public constructor() {
        this.service = new LoginService();
    }

    public async login(req: any, res: any, next: any) {
        const { username, password } = req.body;

        console.log('Login controller username', username);
        console.log('Login controller password', password);

        const user = await this.service.loginByUsernamePassword(username, password);

        try{
            if (user) {
                //console.log(user);
                const token = await this.service.generateToken(user);
                res.json({user: this.service.toUserObject(user), token, status: "logged in" });
            } else {
                res.status(401).json({ msg: `could not log in ${username}` })
            }
        } catch(err) {
            res.status(500).json({ msg: `could not log in ${username}`, err })
        }
    }

    public async register(req: any, res: any, next: any) {
        const { username, password, name } = req.body;

        console.log('Login controller register username', username);
        console.log('Login controller register password', password);
        console.log('Login controller register name', name);

        try {
            const user = await this.service.registerWithUsernamePassword(
                username, password, name);

            if (user) {
                //console.log(user);
                const token = await this.service.generateToken(user);
                res.json({ user: this.service.toUserObject(user), token, status: "registered successfully"});
            } else {
                res.json({ msg: `could not register ${username}` })
            }
        } catch (err) {
            res.json({ msg: `could not register ${username}`, err })
        }
    }
}