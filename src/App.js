import React from 'react'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'

import './App.css'
import TodosMain from './components/TodosMain'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  state = {
    todos: []
  }

  render () {
    const { todos } = this.state;

    return (
      <div className="todoapp">
        <Header onSubmit={() => {}}/>
        <TodosMain
          todos={todos}
          />
        <Footer
          size={todos.length}
          />
      </div>
    )
  }
}

export default App;
