import loginService from "../services/login-service";

export const authenticateJWT = async (req: any, res: any, next: any) =>  {

    const authHeader = req.headers.authorization;

    /*
     GET /widget
     header authorization BEARER kjlhguirdhgjidgjdmjgj
     */
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const user = await loginService.validateToken(token);

        if (user) {
            req.user = user;
            return next();
        }

        // Incorrect Authorization
        return res.sendStatus(403);

    } else {
        // Unknown Authroization
        return res.sendStatus(401);
    }
}