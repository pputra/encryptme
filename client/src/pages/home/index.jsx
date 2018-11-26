import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '../../config/config';

import isLogin from '../../actions/isLogin';
import updateForm from '../../actions/form';
import createData from '../../actions/createData';
import updateData from '../../actions/updateData';
import deleteData from '../../actions/deleteData';
import findData from '../../actions/findData';

import Table from '../../components/contents/table';
import Form from '../../components/contents/form';
import Button from '../../components/buttons/button';


const { db, auth } = firebase;


class Home extends Component {
    constructor(props) {
        super(props);
    }

    search = () => {
        this.props.findData('url', this.props.form.keyword, this.props.currUser);
        this.props.updateForm();
    }

    delete = (id) => {

        this.props.deleteData(id);
         
    }

    populateForm = (id) => {
        var docRef = db.collection("passwords").doc(id);

        docRef.get().then( (doc) => {
            doc = doc.data();

            this.props.updateForm('dataId', id);
            this.props.updateForm('url', doc.url);
            this.props.updateForm('username', doc.username);
            this.props.updateForm('password', doc.username);


        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    add = () => {
        
        this.props.createData({
            currUser: this.props.currUser,
            url: this.props.form.url,
            username: this.props.form.username,
            password: this.props.form.password,
        });

    }

    edit = () => {
        
        this.props.updateData({
            dataId: this.props.form.dataId,
            url: this.props.form.url,
            username: this.props.form.username,
            password: this.props.form.password,
            updatedAt: new Date().toISOString(),
        });

    }


    componentDidMount() {
        
        //this.props.isLogin(this.props.history);

    }


    //validator
    passwordHasNumber = () => {
        return /\d/.test(this.props.form.password);
    }

    passwordHasValidLength = (length) => {
      return this.props.form.password.length >= length;
    }

    passwordHasSpecialChar = () => {
      return /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.props.form.password);
    }

    passwordHasOneLowercase = () => {
        return (/[a-z]/.test(this.props.form.password));
    }

    passwordHasOneUppercase = () => {
        return (/[A-Z]/.test(this.props.form.password));
    }
    
    
    
    render() {
        let thead = ['url', 'username', 'password', 'created at', 'updated at', 'options']
        let searchData = [{
            type: 'text',
            placeholder: 'search here...',
            value: this.props.form.keyword,
            fn: (e) => this.props.updateForm('keyword', e)
        }]

        let tableActions = {
            delete: this.delete,
            edit: this.populateForm
        }

        let data = [
            { type: 'text', placeholder:"url", value: this.props.form.url, fn: (e) => this.props.updateForm('url', e)},
            { type: 'text', placeholder:"username", value: this.props.form.username, fn: (e) => this.props.updateForm('username', e)},
            { type: 'text', placeholder:"password", value: this.props.form.password, fn: (e) =>  this.props.updateForm('password', e)},
        ]

        

        return (

        
            <div className="container mt-3">
                {this.props.loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :

                <div className="row d-flex flex-column  align-items-center justify-content-center">
                    <div className="col-sm-6 d-flex justify-content-center align-items-center">
                    <Form data={searchData} />
                        <Button label={<i class="fas fa-search"></i>} attribute="btn btn-dark mb-3 ml-1" fn={this.search}/>
                    </div>
                    <div class="col-sm-12 border"style={{overflowY:"scroll", height:'300px', padding:'0px'}}>
                        {!this.props.data || this.props.error ? <strong>Data is not found</strong> : <Table tcontent={this.props.data} thead={thead} fn={tableActions}/>}
                    </div>
                    <div class="col-sm-12 d-flex justify-content-around align-items-center mt-3">
                        <div className="col-sm-6">
                            <Form data={data} />
                            {this.props.form.dataId === '' ?
                            <Button fn={this.add} label="add data" attribute="btn btn-outline-dark btn-lg btn-block" /> :
                            <Button fn={this.edit} label="edit data" attribute="btn btn-outline-dark btn-lg btn-block" />}
                        </div>

                        <ul class="list-group" className="col-sm-6">
                            <li class="list-group-item">{this.passwordHasOneUppercase() && <i class="fas fa-check" style={{color:'green'}}/>} Your password should have at least one uppercase letter</li>
                            <li class="list-group-item">{this.passwordHasOneLowercase() && <i class="fas fa-check" style={{color:'green'}}/>} Your password should have at least one lowercase letter</li>
                            <li class="list-group-item">{this.passwordHasSpecialChar() && <i class="fas fa-check" style={{color:'green'}}/>} Your password should have at least one special character</li>
                            <li class="list-group-item">{this.passwordHasNumber() && <i class="fas fa-check" style={{color:'green'}}/>} Your password should have at least one number</li>
                            <li class="list-group-item">{this.passwordHasValidLength(5) && <i class="fas fa-check" style={{color:'green'}}/>} Your password should be at least 5 characters long</li>
                        </ul>
                    </div>
                </div>}
            
            
            
            </div>
        )     
    }
}

const mapStateToProps = state => ({
    currUser: state.loginReducer.currUser, 
    data: state.dataReducer.data,
    loading: state.dataReducer.loading,
    error: state.dataReducer.error,
    form: {
        password: state.formReducer.password,
        url: state.formReducer.url,
        username: state.formReducer.username,
        dataId: state.formReducer.dataId,
        keyword: state.formReducer.keyword,
    },
});
  
const mapDispatchToProps = dispatch => ({
    isLogin: (history) => dispatch(isLogin(history)),
    updateForm: (target, value) => dispatch(updateForm(target, value)),
    createData: (input) => dispatch(createData(input)),
    updateData: (input) => dispatch(updateData(input)),
    deleteData: (id) => dispatch(deleteData(id)),
    findData: (key, keyword, currUser) => dispatch(findData(key, keyword, currUser)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);
