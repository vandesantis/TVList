import React from 'react';
// import './TVShowPage.css';

const LoggedOutView = ({ user, show }) => {
  const {title, genre, rating, synopsis, fcc} = show;
  if (!user.id) {
    return (
      <div>
        <h1>{title}</h1>
        <p>genre: {genre}</p>
        <p>rating: {rating}</p>
        <p>synopsis: {synopsis}</p>
        <p>fcc: {fcc}</p>
      </div>
    );
  }
  return null
}

const LoggedInView = ({ user, show }) => {
  const {title, genre, rating, synopsis, fcc} = show;
  if (user.id) {
    return (
      <div>
        <h1>{title}</h1>
        <p>genre: {genre}</p>
        <p>rating: {rating}</p>
        <p>synopsis: {synopsis}</p>
        <p>fcc: {fcc}</p>
        <p className='mr3 pointer dim'>Add to List</p>
      </div>
    );
  }
  return null
}



class TVShowPage extends React.Component {
  render() {
    const { user } = this.props;
    const { title, genre, rating, synopsis, fcc } = this.props.show;
    return (
      <div>
        <LoggedOutView
          user={user}
          show={this.props.show} />

        <LoggedInView
          user={user}
          show={this.props.show} />
      </div>
    );
  }
}

export default TVShowPage;