import React, { Component } from 'react';
import { Container, Box, Card, Image, SearchField, Icon, Spinner } from 'gestalt'
import './App.css';
import { Link } from 'react-router-dom';
import Strapi from 'strapi-sdk-javascript/build/main'


const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

class App extends Component {

  state = {
    brands: [],
    searchTerm: '',
    loadingBrands: true
  }

  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
            brands {
              _id
              name
              description
              image {
                url
              }
            }
          }` 
        }
      })
      // console.log(response);
      this.setState({brands: response.data.brands, loadingBrands: false })
    } catch (error) {
      console.log(error);
      this.setState({loadingBrands: false })
    }
    
  }

  handleChange = ({value}) => {
    this.setState({searchTerm: value})
  }
  
  filteredBrands = ({searchTerm, brands}) => {
    return brands.filter(brand => {
      return (
        brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })
  }

  render() {
    const {searchTerm, loadingBrands} = this.state
    return (
      <Container>
        {/* Brands Search Field */}
          <Box display="flex" justifyContent = "center"  marginTop = {4}>
            <SearchField 
              id = "searchField"
              accessibilityLabel = "Brand Search Field"
              onChange = {this.handleChange}
              value = {searchTerm}
              placeholder = "Search Brands"
            />
            <Box margin = {4}>
              <Icon 
                icon = "filter"
                color = { searchTerm ? "orange": "gray"}
                size = {20}
                accessibilityLabel = "filter"
              />
            </Box>
          </Box>
        


        {/* Brands Section */}
        <Box
          display = "flex"
          justifyContent = "center"
          marginBottom = {2}
        >
          {/* Brands Header */}
          <h2 style={{ color: 'darkblue'}}>Brew Brands</h2>
        </Box>
        {/* Brands */}
        <Box  
          dangerouslySetInlineStyle = {{
            __style : {
              backgroundColor: '#d6c8ec'
            }
          }}
          wrap 
          display = 'flex' 
          justifyContent = 'around'
          shape = "rounded"
        >
          {this.filteredBrands(this.state).map(brand => (
            <Box
              key = {brand.id}
              width = {210}
              margin = {2}
              paddingY = {4}
            >
              <Card
                image = {
                  <Box width= {200} height = {200}>
                    <Image 
                      alt = "brand"
                      naturalHeight = {1}
                      naturalWidth = {1}
                      fit = "cover"
                      src = {`${apiUrl}${brand.image.url}`}
                    />
                  </Box>
                }
              >
                <Box display= 'flex' justifyContent='center' alignItems='center' direction='column'>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>
                  <h4>
                    <Link to={`/${brand._id}`} >See Brews</Link>
                  </h4>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        <Spinner show={loadingBrands} accessibilityLabel= "Loading Spinner" />
      </Container>
    );
  }
}

export default App;
