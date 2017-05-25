# -*- coding: utf-8 -*-
__author__ = 'chad.ding'

import json
import time
import random
import data_source
from flask import Flask, request

from cors import cors

app = Flask(__name__)

@app.route('/api/channel/list', methods=['GET', 'OPTIONS'])
@cors(headers='Origin, X-Requested-With, Content-Type, Accept')
def get_channel_list():
    keyword = request.args.get('keyword')
    rsp = {
        'code': 0,
        'data': data_source.channel_list,
        'msg': 'success',
    }

    return json.dumps(rsp)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)