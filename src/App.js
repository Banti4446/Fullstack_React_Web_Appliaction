import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import Auth from './components/Auth';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={ItemList} />
                <Route path="/item/:id" component={ItemDetail} />
                <Route path="/auth" component={Auth} />
            </Switch>
        </Router>
    );
};

export default App;
