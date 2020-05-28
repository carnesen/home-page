import React = require('react');
import Koa = require('koa');
import { OK } from 'http-status-codes';
import { MainPage } from './main-page';
import { renderHtmlDocument } from './render-html-document';
import { track } from './util';

export const routerMiddleware: Koa.Middleware = async (ctx, next) => {
  if (ctx.method === 'GET' && ctx.path === '/') {
    ctx.response.status = OK;
    ctx.body = renderHtmlDocument(<MainPage />);
    track('pages', 'view', 'main');
  } else {
    await next();
  }
};
