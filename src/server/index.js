'use strict'

const path = require('path')

const Koa = require('koa')
const serve = require('koa-static')

const PROJECT_DIR = path.resolve(__dirname, '..', '..')
const DIST_DIR = path.resolve(PROJECT_DIR, 'dist')

function echo (...args) {
  console.log(...args) // eslint-disable-lint no-console
}

const app = new Koa()

async function loggerMiddleware (ctx, next) {
  const message = `${ctx.method} ${ctx.url}`
  const startTimestamp = new Date()
  await next()
  if (ctx.status >= 400) {
    echo(`${ctx.status} ${message} - ${Date.now() - startTimestamp}ms`)
  }
}

async function healthCheckMiddleware (ctx, next) {
  if (ctx.get('user-agent').startsWith('ELB-HealthChecker')) {
    ctx.body = 'OK'
  } else {
    await next()
  }
}

app.use(loggerMiddleware)
app.use(healthCheckMiddleware)
app.use(serve(DIST_DIR))

const PORT = 8000

function start () {
  app.listen(PORT)
  echo(`Listening on port ${PORT}`)
}

module.exports = {
  start
}
