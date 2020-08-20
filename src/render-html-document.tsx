import React = require('react');
import ReactDOMServer = require('react-dom/server');

export function renderHtmlDocument(element: React.ReactElement): string {
	return `<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Chris Arnesen's Website</title>
	<link rel="stylesheet" type="text/css" href="/main.css">
</head>
<body>
${ReactDOMServer.renderToStaticMarkup(element)}
</body>
</html>`;
}
