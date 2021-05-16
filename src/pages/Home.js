import React, { useContext, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

import Hero from '../components/Hero';
import ImageWithText from '../components/ImageWithText';

 const Home = () => {

  const { fetchAllProducts, products } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  console.log(products);

  if(!products) return <div>Loadings...</div>

  return (
    <Box>
      <Hero />
      <Grid templateColumns="repeat(3, 1fr)">
      {
        products.map(product => (
          <Link 
            to={`/products/${product.handle}`} 
            key={product.id}
            >
              <Box _hover={{ opacity: '80%' }}>
                <Image src={product.images[0].src} />
                <Text>
                  {product.title}
                </Text>
                <Text>
                  ${product.variants[0].price}
                </Text>
              </Box>
          </Link>
        ))
      }
      </Grid>
      <ImageWithText  
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/premium-bath-bombs.jpg?v=1610066758" 
        heading="Heading" 
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />

      <ImageWithText 
        reverse 
        image="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/bath-bomb-and-candle.jpg?v=1610066758" 
        heading="Second Heading" 
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </Box>
  )
}

export default Home;

