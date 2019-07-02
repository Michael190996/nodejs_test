import KoaRouter from 'koa-router';
import {Balance, Users} from '../controllers';

const router = new KoaRouter();

router.get('/users/:id', async (ctx) => {
    const {id: ID} = ctx.params;

    const [USER, BALANCE] = await Promise.all([
        Users.getById(ID),
        Balance.getById(ID)
    ]);

    console.log(
        USER, BALANCE
    )

    ctx.body = {
        id: ID,
        name: USER.name,
        age: USER.age,
        balance: BALANCE.summary
    };
});

router.post('/users/save/:id', async (ctx) => {
    const {id: ID} = ctx.params;
    const {name: NAME, age: AGE, summary: SUMMARY} = ctx.request.body;

    console.log(ctx.query, ctx.request.body)

    await Promise.all([
        Users.save(ID, NAME, AGE),
        Balance.save(ID, SUMMARY)
    ]);

    ctx.body = {};
});

router.post('/users/delete/:id', async (ctx) => {
    const {id: ID} = ctx.params;

    await Promise.all([
        Users.delete(ID),
        Balance.delete(ID)
    ]);

    ctx.body = {};
});

export default router;