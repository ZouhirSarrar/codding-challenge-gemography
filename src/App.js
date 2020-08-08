
  
import React from "react";
import {ThemeProvider,theme,ColorModeProvider,CSSReset,Text} from '@chakra-ui/core'
import "./stylesheets/style.scss"
import Boxes from "./components/Boxes"
import useReposApi from "./components/useReposApi"
import RepoCard from "./components/RepoCard"
import { Waypoint } from "react-waypoint";


const App = () => {
  const [{repos,hasNextPage},loadMoreData] = useReposApi();
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
                            {console.log(repos)}
                            {repos.map((user, idx) => (
                                <RepoCard
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

export default App;

