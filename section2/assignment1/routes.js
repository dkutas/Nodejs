const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write(
            '<body><form action="/create-user"  method = "POST"><input name="username" type= "text"><button type= "submit">Send</button></form></body>',
        );
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<ul>');
        res.write('<li>Name1</li>');
        res.write('<li>Name2</li>');
        res.write('<li>Name3</li>');
        res.write('</ul>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (ck) => {
            body.push(ck);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const name = parsedBody.split('=')[1];
            console.log(name);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;
