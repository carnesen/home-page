import React = require('react');
import ReactDOMServer = require('react-dom/server');

export function renderHtmlDocument(element: React.ReactElement): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Chris Arnesen's Website</title>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-101920219-2"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-101920219-2');
      </script>
      <link rel="stylesheet" type="text/css" href="/main.css">
    </head>
    <body>
    ${ReactDOMServer.renderToStaticMarkup(element)}
    </body>
    </html>`;
}
