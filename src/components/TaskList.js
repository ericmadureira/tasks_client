import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TasksCard from './TasksCard';

class Tasks extends Component {
	render() {
		return (
			<Row>
				<Col xs={{ span: 8, offset: 2 }} className="tasks_list">
					<p className="title">To-do</p>
					<TasksCard/>
				</Col>
				<Col xs={{ span: 8, offset: 2 }} className="tasks_list">
					<p className="title">Done</p>
					<TasksCard/>
				</Col>
			</Row>
		);
	}
}

export default Tasks;