import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
     this.props.search(event.currentTarget.value);
  }

  render() {
    return (
      <div className="searchBox">
        <input type="text" placeholder="Enter name to search"
               onChange={(e) => { this.props.onSearch(e.currentTarget.value) }}/>
      </div>
    )
  }
}

export default SearchBox;
