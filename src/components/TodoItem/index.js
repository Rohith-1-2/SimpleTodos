import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  state = {cond: true, taskTitle: ''}

  middle = () => {
    const {deleteItem, things} = this.props
    deleteItem(things.id)
  }
  editing = () => {
    const {things} = this.props
    const {title} = things
    this.setState({
      cond: false,
      taskTitle: title
    })
  }
  saving = () => {
    const {updating, things} = this.props
    const {id} = things
    const {taskTitle} = this.state
    updating(id, taskTitle)
    this.setState({
      cond: true,
    })
  }
  changeTitle = e => {
    this.setState({
      taskTitle: e.target.value,
    })
  }
  parts = () => {
    const {things} = this.props
    const {title} = things
    const {cond, taskTitle} = this.state
    if (cond) {
      return (
        <>
          <div className="top">
            <input className="inputbegin" type="checkbox" />
            <p className="para">{title}</p>
          </div>
          <div>
            <button onClick={this.editing} className="but">
              Edit
            </button>
            <button onClick={this.middle} className="but">
              Delete
            </button>
          </div>
        </>
      )
    } else {
      return (
        <>
          <input
            onChange={this.changeTitle}
            className="inputEdit"
            type="text" 
            defaultValue={taskTitle}
          />
          <div>
            <button onClick={this.saving} className="but cant">
              Save
            </button>
            <button onClick={this.middle} className="but cant">
              Delete
            </button>
          </div>
        </>
      )
    }
  }
  render() {
    return <li className="todo">{this.parts()}</li>
  }
}

export default TodoItem
