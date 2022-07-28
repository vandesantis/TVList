import React from 'react';
import { Link } from 'react-router-dom';
import TVShowList from './TVShowList/TVShowList';
import SearchBox from './SearchBox/SearchBox';

const homeState = {
  searchField: ''
}
class Home extends React.Component {
  constructor() {
    super();
    this.state = homeState;
  }
  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    let { openShowPage } = this.props;
    return (
      <div>
        <SearchBox search={this.onSearch} />
        <TVShowList searchField={this.state.searchField} openShowPage={openShowPage} />
          <Link to="/newShowForm" className='pointer dim black'>
            Add show to database
          </Link>
      </div>
    );
  }
}

export default Home;