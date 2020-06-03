import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onSubmitLogin = () => {
        // const history = useHistory();
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response =>  response.json())
        .then(user => {
            if (user.id) {
                this.props.loadUser(user);
                this.setState({redirect: true});
                // history.push("/home");
            }
            else {
                console.log("error logging in");
            }
        })
    }

    render() {
        const { changeRoute } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/home' />;
        }

        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Login</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={this.onPasswordChange}
                            />
                        </div>
                        </fieldset>
                        <div className="">
                            <input 
                                onClick={this.onSubmitLogin}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                                type="submit" 
                                value="Login"/>
                        </div>
                        <div className="lh-copy mt3">
                            {/* <p onClick={() => changeRoute('signup')} href="#0" className=""> */}
                            <p>
                                <Link to="/signup" className="black f6 link dim pointer">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>
            </article>
        );
    }
}

export default Login;