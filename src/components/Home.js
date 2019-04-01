import React from 'react';
import TVShowList from './TVShowList';

class Home extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        let { changeRoute } = this.props;
        return (
            <div>
                <h1>TV Show List</h1>
                <TVShowList changeRoute = {changeRoute}/>
            </div>
        );
      }
}

export default Home;