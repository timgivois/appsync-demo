import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import remove from 'lodash/remove'
import 'todomvc-app-css/index.css'
import 'todomvc-common/base.css'

import './App.css'
import TodosMain from './components/TodosMain'
import Header from './components/Header'
import Footer from './components/Footer'
import { listTodos } from './graphql/queries'
import { createTodo, deleteTodo } from './graphql/mutations'

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

  onNewTodo = async (value) => {
    const { todos } = this.state

    const input = {
      name: value,
      completed: false
    }
    const data = await API.graphql(graphqlOperation(createTodo, {input}))

    const newTodos = JSON.parse(JSON.stringify(todos))
    newTodos.push(data.data.createTodo)

    this.setState({
      todos: newTodos
    })
  }

  onDeleteTodo = async (id) => {
    const { todos } = this.state

    const input = {
      id
    }
    await API.graphql(graphqlOperation(deleteTodo, { input }))

    const newTodos = JSON.parse(JSON.stringify(todos))
    remove(newTodos, todo => todo.id === id)

    this.setState({
      todos: newTodos
    })
  }

  render () {
    const { todos } = this.state;

    return (
      <div className="todoapp">
        <Header onSubmit={this.onNewTodo}/>
        <TodosMain
          todos={todos}
          onDeleteTodo={this.onDeleteTodo}
          />
        <Footer
          size={todos.length}
          />
      </div>
    )
  }
}

export default App;
