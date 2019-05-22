import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CreateTask from './CreateTasks';
import TaskCard from './TaskCard';

class TaskList extends Component {
	constructor(props) {
    super(props);
    this.state = {tasks: []};
    this.loadTasks = this.loadTasks.bind(this);
  }

  async loadTasks(){
  	let response = await fetch("http://localhost:3001/tasks");
  	const tasks = await response.json();
  	this.setState({tasks: tasks});
  }

  componentDidMount(){
  	this.loadTasks();
  }

	render() {
		return (
			<Row>
				<Col xs={{ span: 8, offset: 2 }} className="tasks_list">
					<p className="title">To-do</p>
					<TaskCard loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done != true)} />
					<CreateTask loadTasks={this.loadTasks}/>
				</Col>
				<Col xs={{ span: 8, offset: 2 }} className="tasks_list">
					<p className="title">Done</p>
					<TaskCard loadTasks={this.loadTasks} tasks={this.state.tasks.filter((task) => task.done == true)} />
					<br/>
					<Button variant="dark" className="float-right remove_tasks_btn">Remove all tasks</Button>					
				</Col>
			</Row>
		);
	}
}

export default TaskList;