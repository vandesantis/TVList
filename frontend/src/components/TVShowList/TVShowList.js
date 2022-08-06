import React from 'react';
import TVShowEntry from '../TVShowEntry/TVShowEntry';
import './TVShowList.css';


class TVShowList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shows: []
    }
  }

  componentDidMount() {
    this.getShows();
  }

  getShows = () => {
    fetch('http://localhost:3000/home', {
      method: 'get',
      headers: {'Content-Type': 'application/json'},

    })
    .then(response => response.json())
    .then(shows => {
        this.setState({shows: shows}) 
    })
  }

  render() {
    const { shows } = this.state;

    const filteredData = shows.filter((shows, i) => {
      return shows.title.toLowerCase().includes(this.props.searchField.toLowerCase());
    });

    const tvShowArray = filteredData.map((show, i) => {
      return (
        <TVShowEntry 
          key={show.title}
          openShowPage={this.props.openShowPage}
          show={show}
          />
      )
    });

    return (
      <table>
        <tbody>
          <tr className='table-header'>
            <td>Title</td>
            <td>Genre</td>
            <td>Rating</td>
          </tr>
          { tvShowArray }
        </tbody>
      </table>
    );
  }
}

export default TVShowList;