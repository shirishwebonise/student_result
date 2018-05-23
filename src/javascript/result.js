import React from 'react';
import { NavLink } from 'react-router-dom';
import StudentResultTable from './student-result-table';

class Result extends React.Component {
  constructor(props) {
    super();
    this.result = props.location.params.result;
  }

  render() {
    return (
      <div class="result">
        <NavLink to="/">Click here to go Back</NavLink>
        <p>Name: {`${this.result.firstName} ${this.result.lastName}`}</p>
        <StudentResultTable result={this.result.marks} />
      </div>
    )
  }
}

export default Result;
