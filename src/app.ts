import Koa = require('koa');
import { OK } from 'http-status-codes';

import { consoleLog } from './util';
import { routerMiddleware } from './router-middleware';
import { notFoundMiddleware } from './not-found-middleware';
import { staticMiddleware } from './static-middleware';

const loggerMiddleware: Koa.Middleware = async (ctx, next) => {
	const message = `${ctx.method} ${ctx.url}`;
	const startTimestamp = Date.now();
	await next();
	consoleLog(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`);
};

// Google Cloud App Engine-specific health check response
const googleCloudAppEngineMiddleware: Koa.Middleware = async (ctx, next) => {
	if (ctx.path === '/_ah/start') {
		ctx.status = OK;
	} else {
		await next();
	}
};

const app = new Koa();

app.use(loggerMiddleware);
app.use(googleCloudAppEngineMiddleware);
app.use(routerMiddleware);
app.use(staticMiddleware);
app.use(notFoundMiddleware);

export { app };
