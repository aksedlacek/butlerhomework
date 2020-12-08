import * as React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import App from './App'
import PageUno from './components/PageUno';
import { Header } from './components/Header';
import PageDos from './components/PageDos';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>

                        <Route exact={true} path="/" component={App} />
                        <Route path="/stick" component={PageUno} />
                        <Route path="/rock" component={PageDos} />
                        <Redirect from='*' to='/' />

                </main>
            </div>
        </BrowserRouter>

    );
}