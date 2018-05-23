import React from 'react';
import { Link } from 'react-router-dom';

class ResultsTable extends React.Component {
  constructor() {
    super();
    this.showRow = this.showRow.bind(this);
  }

  showRow(result) {
    var marks = result.marks;
    var total = marks.english + marks.hindi + marks.mathematics;
    var percentage = total*100/500;
    var color = percentage < 35 ? 'red' : '';
    return(
      <tr style={{backgroundColor: color}}>
        <td>
          <Link to={{ pathname: '/result', params: { result: result } }} >
            {result.firstName}
          </Link>
        </td>
        <td>{result.lastName}</td>
        <td>{percentage}</td>
      </tr>
    )
  }

  render() {
    return(
      <table className='listing'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.results.map((result) => {
              return this.showRow(result)
            })
          }
        </tbody>
      </table>
    )
  }
}

export default ResultsTable;
