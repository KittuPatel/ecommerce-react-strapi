import React, { Component } from 'react'
import Strapi from 'strapi-sdk-javascript/build/main'
import { Link } from 'react-router-dom';
import { Box, Card, Image, Button, Mask, IconButton } from 'gestalt'
const apiUrl = process.env.API_URL || 'https://obscure-tor-60047.herokuapp.com'
const strapi = new Strapi(apiUrl)

class Brews extends Component {

    state = {
        brews: [],
        brand: '',
        cartItems: []
    }

    async componentDidMount() {
        try {
            // console.log(this.props.match.params.brandId);
            const response = await strapi.request('POST', '/graphql', {
                data: {
                    query : `query {
                        brand(id: "${this.props.match.params.brandId}"){
                        _id
                        name
                        brews {
                            _id
                            name
                            description
                            price
                            image {
                            url
                            }
                        }
                        }
                    }`
                }
            })
            this.setState({
                brews: response.data.brand.brews, 
                brand: response.data.brand.name,
                cartItems: this.getCart()
            })
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
        
    }

    addToCart = brew => {
        const alreadyInCart = this.state.cartItems.findIndex(item => item._id === 
            brew._id);
        if (alreadyInCart === -1){
            const updatedItems = this.state.cartItems.concat({
                ...brew,
                quantity: 1
            })
            this.setState({cartItems: updatedItems}, () => this.setCart(updatedItems))
        } else {
            const updatedItems = [...this.state.cartItems]
            updatedItems[alreadyInCart].quantity += 1;
            this.setState({cartItems: updatedItems}, () => this.setCart(updatedItems))
        }
    }

    deleteItemFromCart = itemDeleteId => {
        const filteredItems = this.state.cartItems.filter(item => item._id !== itemDeleteId)
        this.setState({cartItems: filteredItems}, () => this.setCart(filteredItems))
    }

    displayTotalPrice = cartItems => {
        const price = cartItems.reduce((acc,item) => acc + item.quantity * item.price,0).toFixed(2)
        return (
         <h4>Total price: ${price}</h4>
        )
    }

    setCart = (value,cartKey = "cart") => {
        if(localStorage){
            localStorage.setItem(cartKey, JSON.stringify(value))
        }
    }

    getCart = (cartKey = "cart") => {
        if(localStorage && localStorage.getItem(cartKey)){
            return JSON.parse(localStorage.getItem(cartKey))
        }
        return []
    }

    render() {
        const {brand, brews, cartItems} = this.state
        return (
            <Box marginTop={4} 
                display="flex" 
                justifyContent="center" 
                alignItems="start"
                dangerouslySetInlineStyle = {{
                    __style : {
                        flexWrap: 'wrap-reverse',
                        backgroundColor: '#fff'
                    }
                    }} 
            >
                {/* Brews section */}
                <Box display="flex" direction="column" alignItems="center">
                    {/* Brews Heading */}
                    <Box>
                        <h2 style={{color:'orange'}}>{brand}</h2>
                    </Box>
               
                    {/* Brews */}
                    <Box 
                        wrap
                        shape = "rounded"
                        display = "flex"
                        justifyContent = "center"
                        // padding = {4}
                    >
                        {brews && brews.map(brew => (
                            <Box 
                                key = {brew._id}
                                width = {210}
                                margin = {3}
                                paddingY = {4}
                            >
                            <Card
                            image = {
                                <Box width= {210} height = {210}>
                                <Image 
                                    alt = "brand"
                                    naturalHeight = {1}
                                    naturalWidth = {1}
                                    fit = "cover"
                                    src = {`${apiUrl}${brew.image.url}`}
                                />
                                </Box>
                            }
                            >
                            <Box display= 'flex' justifyContent='center' alignItems='center' direction='column'>
                                <Box >
                                    <h3>{brew.name}</h3>
                                </Box>
                                <p>{brew.description}</p>
                                <p style={{color:'orchid'}}>${brew.price}</p>
                                <Box >
                                    <h4>
                                    {/* <Link to={`/${brew._id}`} >See Brews</Link> */}
                                        <Button onClick={() => this.addToCart(brew)} color = "blue" text = "Add to Cart" />
                                    </h4>
                                </Box>
                            </Box>
                            </Card>
                        </Box>
                        ))}
                    </Box>
                </Box>    

                {/* user cart */}
                <Box alignSelf="end" marginTop={4} marginLeft={8}>
                    <Mask shape="rounded" wash>
                          <Box display="flex" direction="column" alignItems="center" padding={2}>
                              {/* cart Heading */}
                              <h3>Your Cart</h3>
                              {cartItems.length === 1 ? <i>{cartItems.length} item selected</i> 
                                : <i>{cartItems.length} items selected</i>}
                              {/* cart items */}
                              { cartItems && cartItems.map(item => (
                                  <Box key={item._id} display="flex" alignItems="center" justifyContent="center">
                                        <p>{item.name} * {item.quantity} - ${(item.quantity * item.price).toFixed(2)}</p>
                                        <Box marginTop={-1}>
                                            <IconButton accessibilityLabel="Delete Item"
                                                icon="clear"
                                                size="md"
                                                iconColor="red"
                                                onClick = {() => this.deleteItemFromCart(item._id)}
                                            />
                                        </Box>
                                        
                                  </Box>
                              ))}
                              <Box display="flex" alignItems="center" justifyContent="center" direction="column">
                                <Box margin={2}>
                                    {cartItems.length === 0 && (
                                        <p style={{color:'red'}}>Please select some items</p>
                                    )}
                                </Box>
                                {/* <h4>Total: $3.99</h4> */}
                                {this.displayTotalPrice(cartItems)}
                                <h4>
                                    <Link to="/checkout">Checkout</Link>
                                </h4>
                              </Box>
                          </Box>
                    </Mask>
                </Box>
            </Box>
        )
    }
}

export default Brews
