import React, { Component } from 'react';
import { connect } from 'react-redux';

import register from '../actions/register';
import updateForm from '../actions/form';

import Form from '../components/contents/form';
import Button from '../components/buttons/button';

class Register extends Component {
    constructor(props) {
        super(props);
    }

    
    submit = () => {
        let {email, password} = this.props.form;
        
        this.props.register(email, password, this.props.history);
    }

    render() {
        let data = [
            { value: this.props.form.email, type: 'email', placeholder:"email", fn: (e) => this.props.updateForm('email', e)},
            { value: this.props.form.password, type: 'password', placeholder:"password must be at least 6 characters long", fn: (e) => this.props.updateForm('password', e)}, 
        ]


        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                       
                    </div>
                    <div class="col-sm">
                    { this.props.loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
                        <div>
                            <h1>Welcome to EncryptMe</h1>
                            <small>start storing your password here</small>
                            <Form data={data}/>
                            <Button fn={this.submit} label="register" attribute="btn btn-dark btn-lg btn-block"/>
                            {this.props.error && 
                                <div class="alert alert-danger mt-1" role="alert">
                                    {this.props.errorMessage}
                                </div>}
                        </div>
                    }  
                    </div>
                    <div class="col-sm">
                        
                    </div>
                </div>
            </div>
        )
            
        
    }
}

const mapStateToProps = state => ({
    loading: state.registerReducer.loading,
    error: state.registerReducer.error,
    errorMessage: state.registerReducer.errorMessage,
    form: {
        password: state.formReducer.password,
        email: state.formReducer.email,
    }
});
  
const mapDispatchToProps = dispatch => ({
    register: (email, password, history) => dispatch(register(email, password, history)),
    updateForm: (target, value) => dispatch(updateForm(target, value)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Register);
