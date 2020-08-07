import React,{useState,useEffect} from 'react';
import axios from "axios";
import './App.css';
import {ThemeProvider,theme,ColorModeProvider,CSSReset,Flex,Box,IconButton,useColorMode,Text} from "@chakra-ui/core";
import Posts from "./components/Posts"
const  App = () => {

  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage,setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(10);

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get('https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc')
    setPosts(res.data.items);
    setLoading(false);
  }
  fetchPosts();

}, []);

console.log(posts)
  return (
    <ThemeProvider theme={theme}>
    <ColorModeProvider>
    <CSSReset/>
    <Boxes/>
        <Text fontSize='5xl' textAlign='center'>
          Codding Challenge Gemography
        </Text>  
        <Posts posts={posts}  loading={loading}/>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

const Boxes = () => {

return(
  <Flex align="center" justify="center">
  <Box>
  <ModeSelector/>

        </Box>
  </Flex>
)
}

const ModeSelector = () =>{
  const {colorMode,toggleColorMode}=useColorMode()
  return(
    <Box>
    <IconButton icon={colorMode === 'light'?'moon' : 'sun'} onClick={toggleColorMode}/>
    </Box>
  )
}

export default App;
