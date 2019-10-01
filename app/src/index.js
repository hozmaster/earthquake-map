import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import quakesApp from "./reducers/reducers";

import  {
    getQuakes,
    addNote
} from "./actions/actions";

const store = createStore(quakesApp);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

console.log(store.getState());
store.dispatch(addNote("Learn about actions 1"));
store.dispatch(addNote("Learn about actions 2" ));
store.dispatch(addNote("Learn about actions 3"));
unsubscribe();
store.dispatch(addNote("Learn about actions 4"));
console.log(store.getState());

ReactDOM.render(<Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
