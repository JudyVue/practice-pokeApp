
import React from 'react';
import { render as reactDomRender } from 'react-dom';
import App from './component/app/index'

const container = document.createElement('div');
document.body.appendChild(container);

reactDomRender(<App />, container);