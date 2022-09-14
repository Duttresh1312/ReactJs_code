import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store'; 
import './App.css';
import  HookCakeContainer from './Components/HookCakeContainer'
import  CakeContainer from './Components/CakeContainer'
import  IcecreamContainer from './Components/IcecreamContainer'
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
