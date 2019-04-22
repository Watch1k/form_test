import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { MovieListContainer, SearchContainer } from './containers'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchContainer/>
        <MovieListContainer/>
      </Provider>
    )
  }
}

export default App
