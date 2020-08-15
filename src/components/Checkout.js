import React, { Component } from 'react'
import {Container, Box, Button, TextField, Heading, Text, Modal, Spinner} from 'gestalt'
import ToastMessage from './ToastMessage'
import {Elements, StripeProvider, CardElement, injectStripe} from 'react-stripe-elements'
import { calculateAmount, clearCart } from '../utils'
import {withRouter} from 'react-router-dom'
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

class _CheckoutForm extends Component {

    state = {
        cartItems: [],
        address: '',
        postalCode: '',
        city: '',
        confirmationEmailAddress: '',
        toast: false,
        toastMessage: '',
        orderProcessing: false,
        modal: false
    }

    getCart = (cartKey = "cart") => {
        if(localStorage && localStorage.getItem(cartKey)){
            return JSON.parse(localStorage.getItem(cartKey))
        }
        return []
    }

    componentDidMount() {
        this.setState({cartItems: this.getCart() })
    }

    handleChange = ({event,value}) => {
        event.persist()
        this.setState({ [event.target.name]: value} )
    }

    handleConfirmOrder = async e => {
        e.preventDefault()
        // const {username, email, password} = this.state

        if(this.isFormEmpty(this.state)){
            this.showToast('Fill in all fields')
            return;
        }

        this.setState({modal:true})
    }

    handleSubmitOrder = async () => {
        const {cartItems, city,address,postalCode} = this.state

        const amount = calculateAmount(cartItems)

        this.setState({orderProcessing:true})
        let token;
        try {
            // create stripe token
            const response = await this.props.stripe.createToken()
            token = response.token.id
            // create order with strapi sdk
            await strapi.createEntry('orders', {
                amount,
                brews: cartItems,
                city,
                postalCode,
                address,
                token
            })
            // set orderprocessing - false, set modal - false in state
            this.setState({orderProcessing:false,modal:false})
            // clear user cart
            clearCart()
            // show success toast
            this.showToast("Your Order has been successfully placed", true)

        } catch (error) {
            // set orderprocessing - false, set modal - false in state
            this.setState({orderProcessing:false,modal:false})
            // show error toast
            this.showToast(error.message)
        }
    }

    isFormEmpty = ({address, postalCode, city, confirmationEmailAddress}) =>{
        return !address || !postalCode || !city || !confirmationEmailAddress;
    }

    showToast = (toastMessage, redirect = false) => {
        this.setState({toast: true, toastMessage})
        setTimeout(() => this.setState({toast: false, toastMessage: ''},
        // if true is passed, redirect to home
        () => redirect && this.props.history.push('/')
        ),3000)
    }

    displayTotalPrice = cartItems => {
        const price = cartItems.reduce((acc,item) => acc + item.quantity * item.price,0).toFixed(2)
        return (
         <h4>Total price: ${price}</h4>
        )
    }

    closeModal = () => this.setState({modal:false})

    render() {
        const {toastMessage, toast, cartItems, modal, orderProcessing} = this.state
        return (
            <Container>
                <Box
                    color = "darkWash"
                    margin = {4}
                    padding = {4}
                    shape = "rounded"
                    display = "flex"
                    justifyContent = "center"
                    alignItems = "center"
                    direction = "column"
                >
                    <h2 style={{color:'darkblue'}}>Checkout</h2>
                    { cartItems.length > 0 ? <React.Fragment>
                        {/* user cart */}
                        <Box 
                            display = "flex"
                            justifyContent = "center"
                            alignItems = "center"
                            direction = "column"
                            marginTop = {2}
                            marginBottom = {6}
                        >
                            <i style={{color:'gray'}}>{cartItems.length} Items for Checkout</i>
                            <Box padding = {1}>
                                {cartItems &&  cartItems.map(item => (
                                    <Box key={item._id} padding = {1}>
                                        <p>
                                            {item.name} * {item.quantity} - ${(item.quantity * item.price).toFixed(2)}
                                        </p>
                                    </Box>
                                ))}
                            </Box>
                            {/* display total amount */}
                            {this.displayTotalPrice(cartItems)}
                        </Box>
                        {/* checkout form */}
                        <form style={{display: 'inlineBlock', textAlign:'center', maxWidth: 450}}
                        onSubmit = {this.handleConfirmOrder}
                    > 
                            <TextField
                                id = "address"
                                type = "text"
                                name = "address"
                                placeholder = "Shipping Address"
                                onChange = {this.handleChange}
                            /> 
     
                            <TextField
                                id = "postalCode"
                                type = "text"
                                name = "postalCode"
                                placeholder = "Postal Code"
                                onChange = {this.handleChange}
                            />

                            <TextField
                                id = "city"
                                type = "text"
                                name = "city"
                                placeholder = "City of Residence"
                                onChange = {this.handleChange}
                            />

                        <TextField
                            id = "confirmationEmailAddress"
                            type = "email"
                            name = "confirmationEmailAddress"
                            placeholder = "Confirmation Email Address"
                            onChange = {this.handleChange}
                        />
                        {/* credit card element */}
                        <CardElement id="stripe__input" onReady = {input => input.focus()} />
                        <button id="stripe__button" type="submit">Submit</button>
                    </form>
                     </React.Fragment>  
                        : (
                            //default text
                            <Box color = "darkWash" shape="rounded" padding={4}>
                                <Heading align = "center" color ="watermelon" size="xs" >Your Cart is Empty</Heading>
                                <Text align = "center" italic color="green">Add some brews!</Text>
                            </Box>
                        ) 
                    }
                </Box>
                {/* confirmation modal area */}
                {modal && (
                    <ConfirmationModal 
                        orderProcessing={orderProcessing} 
                        cartItems = {cartItems}
                        closeModal = {this.closeModal}
                        handleSubmitOrder = {this.handleSubmitOrder}
                    />
                )}
                <ToastMessage show={toast} message={toastMessage} />
            </Container>
        )
    }
}

const displayTotalPrice = cartItems => {
    const price = cartItems.reduce((acc,item) => acc + item.quantity * item.price,0).toFixed(2)
    return (
     <h4>Total price: ${price}</h4>
    )
}

const ConfirmationModal = ({orderProcessing,cartItems,closeModal,handleSubmitOrder}) => (
    <Modal
        accessibilityModalLabel = "Confirm your order"
        accessibilityCloseLabel = "close"
        heading = "Confirm your order"
        onDismiss = {closeModal}
        footer = {
            <Box display="flex" marginLeft={-1} marginRight={-1} justifyContent="center">
                <Box padding = {1}>
                    <Button 
                        size = "lg"
                        color = "red"
                        text = "Submit"
                        disabled = {orderProcessing}
                        onClick = {handleSubmitOrder}
                    />
                </Box>
                <Box padding = {1}>
                    <Button 
                        size = "lg"
                        color = "red"
                        text = "Cancel"
                        disabled = {orderProcessing}
                        onClick = {closeModal}
                    />
                </Box>
            </Box>
        }
        role = "alertdialog"
        size = "sm"
    >
        {/* order summary */}
        {!orderProcessing && (
            <Box
                color = "lightWash"
                padding = {2}
                display = "flex"
                justifyContent = "center"
                alignItems = "center"
                direction = "column"
            >
                {cartItems &&  cartItems.map(item => (
                    <Box key={item._id} padding = {1}>
                        <p>
                            {item.name} * {item.quantity} - ${(item.quantity * item.price).toFixed(2)}
                        </p>
                    </Box>
                ))}
                <Box paddingY={2}>
                    {displayTotalPrice(cartItems)}
                </Box>
            </Box>
        )}

        {/* order processing spinner */}
        <Spinner show={orderProcessing} accessibilityLabel="Order Processing Spinner" />
        { orderProcessing && <Text align="center" italic>Submitting Order</Text> }
    </Modal>
)  

const CheckoutForm = withRouter(injectStripe(_CheckoutForm))

const Checkout = () => (
    <StripeProvider apiKey= "pk_test_51HGMTaB4S3gJ2M1JO4XPli9yII2FgLMaX7ttSNtobuZJM1a1UKrB4v0sMkKOMgkBaYtMPR1yzn1Z2ubZOEY1AX7800Ii9pweJk">
        <Elements>
            <CheckoutForm />
        </Elements>
    </StripeProvider>
)

export default Checkout