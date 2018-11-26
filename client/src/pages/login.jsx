import React, { Component } from 'react';
import { connect } from 'react-redux';

import login from '../actions/login';
import updateForm from '../actions/form';

import Form from '../components/contents/form';
import Button from '../components/buttons/button';

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    
    submit = () => {
        let {email, password} = this.props.form;
        this.props.login(email, password, this.props.history);
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                       
                    </div>
                    <div class="col-sm">
                        { this.props.loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
                        <div>
                            <h1>Welcome to EncryptMe</h1>
                            <Form data={[
                                { value: this.props.form.email, type: 'email', placeholder:"email", fn: (e) => this.props.updateForm('email', e)}, 
                                { value: this.props.form.password, type: 'password', placeholder:"password", fn: (e) => this.props.updateForm('password', e)}
                                ]}/>
                            <Button fn={this.submit} label="login" attribute="btn btn-dark btn-lg btn-block"/>
                            {this.props.error && 
                            <div class="alert alert-danger mt-1" role="alert">
                            invalid email/password
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
    loading: state.loginReducer.loading, 
    error: state.loginReducer.error,
    form: {
        password: state.formReducer.password,
        email: state.formReducer.email,
    }
})
  
const mapDispatchToProps = dispatch => ({
    login: (email, password, history) => dispatch(login(email, password, history)),
    updateForm: (target, value) => dispatch(updateForm(target, value)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);
