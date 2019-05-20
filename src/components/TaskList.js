import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TasksCard from './TasksCard';

class TaskList extends Component {
	constructor(props) {
    super(props);
    this.state = {tasks: []};
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
					<TasksCard tasks={[{'title': 'Criar Header Criar Header Criar Header', 'done': false}, {'title': 'Criar footer', 'done': false}, {'title': 'Criar footer', 'done': false}]} />
				</Col>
				<Col xs={{ span: 8, offset: 2 }} className="tasks_list">
					<p className="title">Done</p>
					<TasksCard tasks={[{'title': 'Criar Header Criar Header Criar Header', 'done': true}, {'title': 'Criar footer', 'done': true}, {'title': 'Criar footer', 'done': true}]} />
				</Col>
			</Row>
		);
	}
}

export default TaskList;