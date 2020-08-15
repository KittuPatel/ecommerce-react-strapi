import React from 'react'
import { Box, Image, Button } from 'gestalt'
import { NavLink, withRouter } from 'react-router-dom'

const getToken = (tokenKey = "jwt") => {
    if(localStorage && localStorage.getItem(tokenKey)) {
        return JSON.parse(localStorage.getItem(tokenKey))
    }
    return null
}

const clearToken = (tokenKey = "jwt") => {
    if(localStorage){
        localStorage.removeItem(tokenKey)
    }
}

const clearCart = (tokenKey = "cart") => {
    if(localStorage){
        localStorage.removeItem(tokenKey)
    }
}

class Navbar extends React.Component {

    handleSignout = () => {
        // clear token
        clearToken()
        // clear cart
        clearCart()
        //redirect home
        this.props.history.push('/')
    }

    render(){
        return getToken() !== null 
        ? <AuthNavbar handleSignout = {this.handleSignout} /> 
        : <UnAuthNavbar />
    }
}

const AuthNavbar = ({handleSignout}) => (
    <Box
    display ="flex"
    alignItems = "center"
    justifyContent="around"
    height = {70}
    color = "midnight"
    padding = {1}
    shape = "roundedBottom"
>

{/* Checkout link */}
<NavLink activeClassName="active" to="/checkout">
    {/* <Text size="xl" color="white" >Sign In</Text> */}
    <h2 style={{ color: 'white'}}>Checkout</h2>
</NavLink>

{/* Title and logo */}
<NavLink activeClassName="active" exact to="/">
    <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50} >
            <Image 
                src="./icons/logo.svg" 
                alt = "Brewhub logo"
                naturalHeight = {1}
                naturalWidth = {1}
            />
        </Box>
        
        <h2 style={{ color: 'orange'}}>Brewhub</h2>
    </Box>
</NavLink>

{/* Signout link */}
    <Button onClick={handleSignout} color="transparent" text = "Sign Out" inline size="md" />

</Box>
)

const UnAuthNavbar = () => (
    <Box
        display ="flex"
        alignItems = "center"
        justifyContent="around"
        height = {70}
        color = "midnight"
        padding = {1}
        shape = "roundedBottom"
    >

    {/* Sign in link */}
    <NavLink activeClassName="active" to="/signin">
        {/* <Text size="xl" color="white" >Sign In</Text> */}
        <h2 style={{ color: 'white'}}>Sign In</h2>
    </NavLink>

    {/* Title and logo */}
    <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
            <Box margin={2} height={50} width={50} >
                <Image 
                    src="./icons/logo.svg" 
                    alt = "Brewhub logo"
                    naturalHeight = {1}
                    naturalWidth = {1}
                />
            </Box>
            
            <h2 style={{ color: 'orange'}}>Brewhub</h2>
        </Box>
    </NavLink>

    {/* Sign up link */}
    <NavLink activeClassName="active" to="/signup">
        <h2 style={{ color: 'white'}}>Sign Up</h2>
    </NavLink>
    </Box>
)

export default withRouter(Navbar)
