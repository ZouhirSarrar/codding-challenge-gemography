
  
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Waypoint } from "react-waypoint";
import {Box,Image,Badge,Flex,Grid,ThemeProvider,theme,ColorModeProvider,CSSReset,Text,useColorMode,IconButton} from '@chakra-ui/core'

const App = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        if (!hasNextPage) return;

        const searchUserURL = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;
        axios.get(searchUserURL).then(({ data: { items, total_count } }) => {
            if (items) {
                if (total_count === users.length + items.length) {
                    setHasNextPage(false);
                }

                setUsers(users => [...users, ...items]);
                setPage(page => page + 1);
            }
        });
    };

    const loadMoreData = () => {
        if (page > 1) {
            getData();
        }
    };

    return (
        <>
    <ThemeProvider theme={theme}>
    <ColorModeProvider>
    <CSSReset/>
    <Boxes/>
        <Text fontSize='5xl' textAlign='center'>
          Codding Challenge Gemography
        </Text>  
            <div className="row">
                            <ul className="list-group list-group-flush">
                                {users.map((user, idx) => (
                                    <UserCard
                                        key={idx}
                                        sno={idx + 1}
                                        {...user}
                                    />
                                ))}
                            </ul>
                    {hasNextPage && (
                        <Waypoint onEnter={loadMoreData}>
                            <h5 className="text-muted mt-5">
                                Loading data{" "}
                            </h5>
                        </Waypoint>
                    )}
            </div>
      </ColorModeProvider>
    </ThemeProvider>


        </>
    );
};

const UserCard = ({ name, description, id, owner, open_issues_count,stargazers_count}) => {
    return (
    <Flex       align='center'
      justify='flex-end'
      direction='row'
      width='80'
      height='80'
      borderRadius='40px'
      margin='16px'
      padding='16px' >

          <Box >
            <Image  src={owner.avatar_url} alt={owner.login} align="center" fallbackSrc="https://via.placeholder.com/150"/>
          </Box>

          <Box>
                      <Box
                      mt="1"
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
            >
                      {name}
                    </Box>
            <Text textAlign="center">{description}</Text>
            <Box p="2">

           </Box>
             </Box>       
    </Flex>
        
    );
};

const Boxes = () => {

return(

  <Flex align="center" justify="center" >
  <Box >
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

