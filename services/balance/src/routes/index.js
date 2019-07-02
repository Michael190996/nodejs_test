import KoaRouter from 'koa-router';
import {Balance} from '../models';

const router = new KoaRouter();

router.get('/balance/:id', async (ctx) => {
    const {id: ID} = ctx.params;

    ctx.body = await Balance.findOne({
        id: ID
    });

    ctx.assert(ctx.body, 500, 'balance of undefined');
});

router.post('/balance/save/:id', async (ctx) => {
    const {id: ID} = ctx.params;
    const {summary: SUMMARY} = ctx.body;

    const balance = new Balance({
        id: ID,
        summary: SUMMARY
    });

    await balance.save();

    ctx.body = {};
});

router.post('/balance/delete/:id', async (ctx) => {
    const {id: ID} = ctx.params;

    await Balance.delete({
        id: ID
    });

    ctx.body = {};
});

export default router;