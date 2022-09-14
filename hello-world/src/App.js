import React, { Component } from 'react'
import DataFetching from '../../state-hook/src/Components/DataFetching';
import './App.css';
import ComponentC from './components/ComponentC';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserContext.Provider value='Boom'>
          <ChannelContext.Provider value='bot'>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider> */}
         <DataFetching/>
      </div>
    )
  }
}

export default App;
