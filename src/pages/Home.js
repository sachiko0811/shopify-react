import React, { useContext, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image } from '@chakra-ui/react';

import { ShopContext } from '../context/shopContext';

import Hero from '../components/Hero';
import RichText from '../components/RichText';
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
      <RichText 
        heading="The relaxation you've been waiting for."
        text="Our Bath bombs guarantee a fun, relaxing, and colorful night."
      />
      <Grid templateColumns="repeat(3, 1fr)">
      {
        products.map(product => (
          <Link 
            to={`/products/${product.handle}`} 
            key={product.id}
            >
              <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                <Image src={product.images[0].src} />
                <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                  {product.title}
                </Text>
                <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                  ${product.variants[0].price}
                </Text>
              </Box>
          </Link>
        ))
      }
      </Grid>
      <RichText 
        heading="Treat yourself!"
      />
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

