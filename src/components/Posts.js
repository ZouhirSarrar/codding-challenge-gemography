import React from 'react';
import {Box,Image,Badge,Flex,Grid} from '@chakra-ui/core'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

    
  return (
    <Flex align="center" justify="center">
    
      <Grid templateColumns="repeat(2, 1fr)" gap={4} gridColumnGap={0}>
            {posts.map(post => (
              <>
            <Box ml={25}>
              <Image rounded="full" size="200px" src={post.owner.avatar_url} alt={post.owner.login} align="center" fallbackSrc="https://via.placeholder.com/150"/>
            </Box>

            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" align="center">
              <Box p="2">
                      <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {post.name}
                </Box>
                <Box d="flex" alignItems="baseline">
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    ml="2"
                  >
                    {post.description} 
                  </Box>
                </Box>
                <Grid templateColumns="repeat(2, 4fr)" gap={-3}>
                <Box d="flex" mt="2" alignItems="center">
                  <Badge rounded="full" px="2" variantColor="teal">
                    Stars
                              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {post.stargazers_count} 
                  </Box>
                  </Badge>

                </Box>
                <Box d="flex" ml="-30" mt="2" alignItems="cenleftter">
                  <Badge rounded="full" px="2" variantColor="teal">
                    Issues
                              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {post.open_issues_count} 
                  </Box>
                  </Badge>
                </Box>
                </Grid>

              </Box>
            </Box>
             </> ))}
      </Grid>
    </Flex>
  )
};

export default Posts;