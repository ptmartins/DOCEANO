import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { Layout } from './components';

const root = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Layout>
                <App />
            </Layout>
        </Router>
    </React.StrictMode>, root
);