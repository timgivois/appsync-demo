import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'

import './App.css'
import TodosMain from './components/TodosMain'
import Header from './components/Header'
import Footer from './components/Footer'
import { listTodos } from './graphql/queries'

class App extends React.Component {
  state = {
    todos: []
  }

  async componentDidMount () {
    const data = await API.graphql(graphqlOperation(listTodos))

    this.setState({
      todos: data.data.listTodos.items
    })
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
