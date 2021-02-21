// import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  QueryParamProvider,
  transformSearchStringJsonSafe
} from 'use-query-params';

import App from './App';

const queryStringifyOptions = {
  transformSearchString: transformSearchStringJsonSafe
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <QueryParamProvider
          ReactRouterRoute={Route}
          stringifyOptions={queryStringifyOptions}
        >
          <App />
        </QueryParamProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
