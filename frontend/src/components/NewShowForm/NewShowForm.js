import React from 'react';



class NewShowForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            synopsis: '',
            genre: '',
            fcc: ''
        }
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value});
    }

    onSynopsisChange = (event) => {
        this.setState({synopsis: event.target.value});
    }

    onGenreChange = (event) => {
        this.setState({genre: event.target.value});
    }

    onFccChange = (event) => {
        this.setState({fcc: event.target.value});
    }

    updateDatabase = () => {
        fetch('http://localhost:3000/submitshow', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                synopsis: this.state.synopsis,
                genre: this.state.genre,
                fcc: this.state.fcc
            })
        })
        .then(response => response.json())
        .then(show => {})

        this.props.changeRoute('home');
    }

    render() {
        return (
            <div className="pa4 black-80">
                <div className="measure center">
                    <label htmlFor="title" className="f6 b db mb2">Title</label>
                    <input 
                        id="title" 
                        className="input-reset ba b--black-20 pa2 mb2 db w-100 mb4" 
                        type="text"
                        onChange = {this.onTitleChange}
                        />
                </div>
                <div className="measure center">
                    <label htmlFor="synopsis" className="f6 b db mb2">Synopsis</label>
                    <input 
                        id="synopsis" 
                        className="input-reset ba b--black-20 pa2 mb2 db w-100 mb4" 
                        type="text"
                        onChange = {this.onSynopsisChange}
                        />
                </div>
                <div className="measure center">
                    <label htmlFor="genre" className="f6 b db mb2">Genre</label>
                    <input 
                        id="genre" 
                        className="input-reset ba b--black-20 pa2 mb2 db w-100 mb4" 
                        type="text"
                        onChange = {this.onGenreChange}
                        />
                </div>
                <div className="measure center">
                    <label htmlFor="fcc" className="f6 b db mb2">FCC</label>
                    <input 
                        id="fcc" 
                        className="input-reset ba b--black-20 pa2 mb2 db w-100 mb4"
                         type="text"
                         onChange = {this.onFccChange}
                         />
                </div>
                <div className="">
                    <input 
                        onClick={this.updateDatabase}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Submit"/>
                </div>
            </div>
        );
      }
}

export default NewShowForm;