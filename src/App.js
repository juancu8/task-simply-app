import React, { Component } from 'react';
import './App.css';

// import Navigation from './components/Navigation'

import Form from './components/Form'

import {tasks} from './tasks.json';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks
    }
    this.handleAddTask = this.handleAddTask.bind(this)
  }

  //method to add new data, call whit Form component
  handleAddTask(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }

  handleRemove(index){
    if(window.confirm('Are you sure to delete')){
      this.setState({
        // if data not pased condition filter this
        tasks: this.state.tasks.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render() {
    // First process dmy data
    const tasksShow = this.state.tasks.map((task, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{task.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {task.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{task.description}</p>
              <p><mark>{task.user}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                // Can bind the state here
                onClick={this.handleRemove.bind(this, i)}
                >
                  Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        {/* <Navigation title="First"/> */}
        <nav className="navbar navbar-dark bg-dark">
             <a href="" className="text-white">
               Tasks
               <span className="badge badge-pill badge-light ml-2">
                 {this.state.tasks.length}
               </span>
             </a>
         </nav>
        <div className="container">
          <div className="row mt-4">
            {/* Render Form */}
            <div className="col-md-4">
              <Form onAddTask={this.handleAddTask} />
            </div>
            {/* Render tasks */}
            <div className="col-md-8">
              <div className="row">
                {tasksShow}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
