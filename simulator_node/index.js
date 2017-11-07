/**
 *@Author: chad.ding
 *@Copyright: 2017-2018 DMF
 *@Date: 2017-05-25 22:22:27
 */

let express = require('express');
let fs = require('fs');
let { logger } = require('../logger');

let app = express();

let options = [{
    url: '/api/channel/list',
    method: 'GET',
    data: '/data/channel_list.json'
}, {
    url: '/api/queue/list',
    method: 'GET',
    data: '/data/queue_list.json'
}, {
    url: '/api/vdp/list',
    method: 'GET',
    data: '/data/vdp_list.json'
}, {
    url: '/api/subscribe/list',
    method: 'GET',
    data: '/data/subscribe_list.json'
}, {
    url: '/api/params/list',
    method: 'GET',
    data: '/data/params_list.json'
}, {
    url: '/api/domain/list',
    method: 'GET',
    data: '/data/domain_list.json'
}, {
    url: '/api/console/list',
    method: 'GET',
    data: '/data/console_list.json'
}, {
    url: '/api/cluster/list',
    method: 'GET',
    data: '/data/cluster_list.json'
}, {
    url: '/api/chart/line',
    method: 'GET',
    data: '/data/line_chart_data.json'
}, {
    url: '/api/chart/bar',
    method: 'GET',
    data: '/data/bar_chart_data.json'
}, {
    url: '/api/chart/pie',
    method: 'GET',
    data: '/data/pie_chart_data.json'
}, {
    url: '/api/chart/radar',
    method: 'GET',
    data: '/data/radar_chart_data.json'
}, {
    url: '/api/chart/topological',
    method: 'GET',
    data: '/data/topological_chart_data.json'
}];

function getFunction(option) {
    let url = option.url,
        data = option.data;

    app.get(url, function(req, res) {
        res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });

        fs.readFile(__dirname + data, { encoding: 'utf-8' }, function(err, data) {
            if (err) {
                console.error(err);
                logger.error(err);
                return;
            }
            res.end(data);
        });
    });
}

options.forEach(function(option) {

    if ('GET' === option.method) {
        getFunction(option);
    }

});

app.listen(8081);
console.log('Server running on 8081');
