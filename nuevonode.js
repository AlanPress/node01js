const https = require('node:http');
const os = require('node:os');
const bytestogb = (bytes) =>{
    bytes (/1024 /1024/1024).tofized(2)};


const informaciondelsistema = {
    nombreSO: os.type(),
    versionSO: os.release(),
    arquitectura: os.arch(),
    memoriaTotal: `${bytestogb(os.totalmem())} GB`,
    memoriaLibre: `${bytestogb(os.freemem())} GB`,
    procesadores: os.cpus().length,
    modelodelprocesador: os.cpus()[0].model,
    tiempoActivo: `${(os.uptime() / 3600).toFixed(2)} horas`,
    nombreHost: os.hostname(),
}





const port = 6767

const generalhtml = (any) = {
    return:
    <html lang="en">
    <head>
    </head>
    <body>

    <h1>bienvenidos</h1>
    <p>generacion de acceso</p>
    
    </body>
    </html>
}

const server = http.createserver((req, res) =>{
    res.writehead(200, {'content-type': 'text/html; chanse=utf-8'});
    const html = generalhtml();
    res.end(html);
})

server.listen(port, ()=>{
    console.log('server running at http://localhost:$(port)/');
    
})