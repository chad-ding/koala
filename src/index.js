/**
 *@Author: chad.ding
 *@Copyright: 2008-2016 CHAD | 丁铭锋
 *@Date: 2017-04-02 14:12:49
 */

import React from 'react';
import {render} from 'react-dom';
import 	{Provider} from 'react-redux';
import {createStore} from 'redux';
import Root from './Root';
import Footer from './Footer';
import todoApp from './reducers';

let store = createStore(todoApp);

render(
	<Provider store={store}>
		<Root></Root>
	</Provider>,
    document.getElementById('root')
);
