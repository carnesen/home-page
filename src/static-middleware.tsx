import serveStatic = require('koa-static');
import path = require('path');

export const staticMiddleware = serveStatic(
	path.join(__dirname, '..', 'dist/'),
);
