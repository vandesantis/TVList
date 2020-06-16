import React from 'react';
// import './TVShowPage.css';

const LoggedOutView = ({ user, title, genre, rating, synopsis, fcc }) => {
    if (!user.id) {
        return (
            <div>
                {console.log({title})}
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

const LoggedInView = ({ user, title, genre, rating, synopsis, fcc }) => {
    if (user.id) {
        return (
            <div>
                {console.log({title})}
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
        const {user, title, genre, rating, synopsis, fcc} = this.props;
        return (
            <div>
                <LoggedOutView 
                user={user}
                title={title}
                genre={genre}
                rating={rating}
                synopsis={synopsis}
                fcc={fcc}/>

                <LoggedInView 
                user={user}
                title={title}
                genre={genre}
                rating={rating}
                synopsis={synopsis}
                fcc={fcc}/>
            </div>
        );
    }
}

export default TVShowPage;