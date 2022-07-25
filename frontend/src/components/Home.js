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
        {/* <h1>TV Show List</h1> */}
        <SearchBox search={this.onSearch} />
        {/* { console.log(homeState.searchField) } */}
        <TVShowList searchField={this.state.searchField} openShowPage={openShowPage} />
        {/* <p onClick={() => changeRoute('newShowForm')} className='pointer dim'> */}
        {/* <p className='pointer dim'> */}
        <p>
          <Link to="/newShowForm" className='pointer dim black'>
            Add show to database
          </Link>

        </p>
      </div>
    );
  }
}

export default Home;