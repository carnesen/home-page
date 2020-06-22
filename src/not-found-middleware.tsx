import React = require('react');
import Koa = require('koa');
import { NOT_FOUND } from 'http-status-codes';
import { renderHtmlDocument } from './render-html-document';

export const notFoundMiddleware: Koa.Middleware = async (ctx, next) => {
  ctx.response.status = NOT_FOUND;
  ctx.response.body = renderHtmlDocument(
    <div style={{ width: '100%' }}>
      <div className="card">404 Not Found</div>
    </div>,
  );
  await next();
};
