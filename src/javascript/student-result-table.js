import React from 'react';

class StudentResultTable extends React.Component {
  constructor() {
    super();
    this.showRow = this.showRow.bind(this);
  }

  showRow(studentMarks) {
    var total = studentMarks.english + studentMarks.hindi + studentMarks.mathematics;
    var percentage = total*100/500;

    return(
      <tr>
        <td>{studentMarks.english}</td>
        <td>{studentMarks.hindi}</td>
        <td>{studentMarks.mathematics}</td>
        <td>{total}</td>
        <td>{percentage}</td>
      </tr>
    )
  }

  render() {
    return(
      <table class='listing'>
      <tr>
        <th>English</th>
        <th>Hindi</th>
        <th>mathematics</th>
        <th>Total</th>
        <th>Percentage</th>
      </tr>
      { this.showRow(this.props.result) }
      </table>
    )
  }
}

export default StudentResultTable;
