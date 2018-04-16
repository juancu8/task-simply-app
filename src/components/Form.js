import React, { Component } from 'react';

class Form extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      user: '',
      description: '',
      priority: 'low'
    };
    // For relationship
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Execute when change something on the input
  handleInput(e){
    const {value, name} = e.target
    // change data from "this.state", this lost and need make a relationship with constructor
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    // skip refresh
    e.preventDefault();
    this.props.onAddTask(this.state)
  }


  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange = {this.handleInput}
              className="form-control"
              placeholder="Title"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="User"
              onChange = {this.handleInput}
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              onChange = {this.handleInput}
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                onChange = {this.handleInput}
              >
              <option>low</option>
              <option>moderate</option>
              <option>urgent</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default Form;
