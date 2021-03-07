import { string } from "prop-types";

export class LoginService {

    private user: any = {
        fred: "fred"
    };

    public async loginWithUsernamePassword(
        username: string,
        password: string
    ): Promise<string|null> {

        return (this.user[username] === password)?'true': null;
    }
}

export default new LoginService();