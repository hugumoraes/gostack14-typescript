import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'hugomoraes_@hotmail.com',
        password: '123456',
        techs: ['Node.js', 'ReactJs', 'React native', { title: 'Javascript', experience: 100}]
    });

    return res.json({ ok: true});
}