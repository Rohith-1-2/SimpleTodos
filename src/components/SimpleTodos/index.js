const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
]

import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'
import {v4 as uuidv4} from 'uuid'

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
    userInput: '',
  }
  updating = (a, desp) => {
    this.setState(prevState => ({
      todoList: prevState.todoList.map(item => {
        if (item.id === a) {
          return {...item, title: desp}
        } else {
          return {...item}
        }
      }),
    }))
  }
  taskName = e => {
    this.setState({
      userInput: e.target.value,
    })
  }
  adding = () => {
    const {userInput} = this.state
    let obj = {
      id: uuidv4(),
      title: userInput,
    }
    this.setState(prevState => ({
      todoList: [...prevState.todoList, obj],
    }))
  }
  deleting = bat => {
    this.setState(prevState => {
      const newOne = prevState.todoList.filter(item => item.id !== bat)
      return {
        todoList: newOne,
      }
    })
  }
  render() {
    const {todoList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <div className="addCont">
            <input onChange={this.taskName} className="inputEle" type="text" />
            <button onClick={this.adding} className="addbut">
              Add
            </button>
          </div>
          <ul className="unorder">
            {todoList.map(item => (
              <TodoItem
                things={item}
                deleteItem={this.deleting}
                updating={this.updating}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
