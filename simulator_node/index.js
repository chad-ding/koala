/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-25 22:22:27
 */

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/api/channel/list', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

    fs.readFile(__dirname + '/data/channel_list.json', { encoding: 'utf-8' }, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.end(data);
    });
});

app.get('/api/queue/list', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

    fs.readFile(__dirname + '/data/queue_list.json', { encoding: 'utf-8' }, function(err, data) {
        if (err) {
            console.error(err);
            return;
        }
        res.end(data);
    });
});

app.listen(8080);

console.log('Server running on 8080 \n');
