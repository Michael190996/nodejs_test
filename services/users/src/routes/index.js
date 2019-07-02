import KoaRouter from 'koa-router';
import {Users} from '../models';

const router = new KoaRouter();

router.get('/users/:id', async (ctx) => {
    const {id: ID} = ctx.params;

    ctx.body = await Users.findOne({
        id: ID
    });

    ctx.assert(ctx.body, 500, 'user of undefined');
});

router.post('/users/save/:id', async (ctx) => {
    const {id: ID} = ctx.params;
    const {name: NAME, age: AGE} = ctx.request.body;

    console.log(ctx.request.body)

    const user = new Users({
        id: ID,
        age: AGE,
        name: NAME
    });

    await user.save();

    ctx.body = {};
});

router.post('/users/delete/:id', async (ctx) => {
    const {id: ID} = ctx.params;

    await Users.delete({
        id: ID
    });

    ctx.body = {};
});

export default router;