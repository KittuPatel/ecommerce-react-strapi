import React, { Component } from 'react'
import {Container, Box, Button, TextField} from 'gestalt'
import ToastMessage from './ToastMessage'
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'https://obscure-tor-60047.herokuapp.com'
const strapi = new Strapi(apiUrl)

class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        toast: false,
        toastMessage: '',
        loading: false
    }

    handleChange = ({event,value}) => {
        event.persist()
        this.setState({ [event.target.name]: value} )
    }

    handleSubmit = async e => {
        e.preventDefault()
        const {username, email, password} = this.state

        if(this.isFormEmpty(this.state)){
            this.showToast('Fill in all fields')
            return;
        }
        // sign up user
        try {
            // set loading - true
            this.setState({loading:true})
            // make request to register user with strapi
            const response = await strapi.register(username, email, password)
            // set loading - false
            this.setState({loading:false})
            // put token in local storage to manage user session
            this.setToken(response.jwt)
            // redirect user to home page
            this.redirectUser('/')

        } catch (error) {
            // set loading - false
            this.setState({loading:false})
            // show toast with error message
            this.showToast(error.message)
        }
    }

    setToken = (value, tokenKey = "jwt") => {
        if(localStorage){
            localStorage.setItem(tokenKey,JSON.stringify(value))
        }
    }

    redirectUser = path => this.props.history.push(path)

    isFormEmpty = ({username, email, password}) =>{
        return !username || !email || !password;
    }

    showToast = toastMessage => {
        this.setState({toast: true, toastMessage})
        setTimeout(() => this.setState({toast: false, toastMessage: ''}),5000)
    }

    render() {
        const { toastMessage, toast, loading } = this.state
        return (
            <Container>
                <Box
                    dangerouslySetInlineStyle={{
                        __style : {
                            backgroundColor: '#ebe2da'
                        }
                    }}
                    margin = {4}
                    padding = {4}
                    shape = "rounded"
                    display = "flex"
                    justifyContent = "center"
                >
                    {/* Sign up */}
                    <form style={{display: 'inlineBlock', textAlign:'center', maxWidth: 450}}
                        onSubmit = {this.handleSubmit}
                    >
                        <Box marginBottom={2} display="flex" direction="column" alignItems="center">
                            <h2 style={{color:'orange'}}>Let's Get Started</h2>
                            <p style={{color:'orchid'}}>Sign up to order some brews</p>
                        </Box>
                        <TextField
                            id = "username"
                            type = "text"
                            name = "username"
                            placeholder = "Username"
                            onChange = {this.handleChange}
                        />
                        <TextField
                            id = "email"
                            type = "email"
                            name = "email"
                            placeholder = "Email Address"
                            onChange = {this.handleChange}
                        />
                        <TextField
                            id = "password"
                            type = "password"
                            name = "password"
                            placeholder = "Password"
                            onChange = {this.handleChange}
                        />
                        <Button inline disabled={loading} color="blue" text="Submit" type="submit" />
                    </form>
                </Box>
                <ToastMessage show={toast} message={toastMessage} />
            </Container>
        )
    }
}

export default Signup