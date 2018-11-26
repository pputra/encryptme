import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import logOut from '../../actions/logOut';


class NavBar extends Component {
    constructor(props) {
        super(props);

        
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: 'white'}}>
            <a className="navbar-brand"><i class="fas fa-lock-open"></i> EncryptMe</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                {this.props.currUser ?
                    <li className="nav-item active">
                        <a className="nav-link" > 
                        <Link to={{pathname: `/`}}>Home</Link><span class="sr-only">(current)</span>
                        </a>
                    </li> :
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link">
                                <Link to={{pathname: `/login`}}>Login</Link><span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link">
                                <Link to={{pathname: `/register`}}>Register</Link><span class="sr-only">(current)</span>
                            </a>
                        </li>
                    </ul> 
                }
                </ul> 
            
                {this.props.currUser &&
                <div className="form-inline my-2 my-lg-0">
                    logged in as {this.props.currUser}
                    <button className="btn btn-outline-danger my-2 my-sm-0 ml-3" onClick={() => this.props.logOut()}>log out</button>
                </div>
                }
            </div>
        </nav>
        )
    }
}

const mapStateToProps = state => ({
    currUser: state.loginReducer.currUser
})
  
const mapDispatchToProps = dispatch => ({
    logOut: (history) => dispatch(logOut(history))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
