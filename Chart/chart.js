const net = require('net');
const chartServer = net.createServer();

clientList = [];
// let count = 1;

chartServer.on('connection', function (client) {
    client.name = client.remoteAddress + ':' + client.remotePort;   //建立客户端的IP地址和端口
    console.log(client.name + 'joined');
    clientList.push(client);

    // console.log('client' + count + ' connected...\n');
    // count ++
    
    client.write("Welcome to sheng's server...\n\r");
    client.write("The server is building...\n\r");

    // client.end();

    client.on('data', function (data) {
        // console.log(data.toString());
        for(let i = 0; i < clientList.length; i++) {
            if(client != clientList[i]) {
                clientList[i].write(client.name + data.toString());
            }
        }
    })

    client.on('end', function () {
        clientList.splice(clientList.indexOf(client),1);
        // for(let i = 0; i < clientList.length; i++) {
        //     if(client != clientList[i]) {
        //         clientList[i].write(client.name + ' logout');
        //     }
        // }
        console.log(client.name + 'left');
    })

    client.on('error', function (e) {
        console.log(e);
    })
})

chartServer.listen(9000);
