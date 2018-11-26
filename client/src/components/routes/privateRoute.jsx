import React, { Component } from "react";
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
} from "react-router-dom";

import isLogin from '../../actions/isLogin';


import Home from '../../pages/home/index';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.isLogin();
    }

    render() {
        if (this.props.currUser) {
            return (
                <Route  exact path="/" component={Home} />
            )
        }
        return (
            <Redirect to={{pathname: '/login'}}/>
        )
    }

}

const mapStateToProps = state => ({
    currUser: state.loginReducer.currUser
});
  
const mapDispatchToProps = dispatch => ({
    isLogin: (history) => dispatch(isLogin(history)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);

