import React from "react";
import AddTodo from "./components/addTodo/addTodo";
import Item from "./components/item/item"
import Header from '../src/components/header/header'

import './app.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="todoContainer">
                <AddTodo />
                <Item />
            </div>
        </div>
    );
}

export default App;
