import React from "react";
import { Skeleton, Badge, Flex } from "@chakra-ui/core";
import TimeInterval from "../utils/TimeInterval";

const RepoCard = ({
  name,
  description,
  id,
  owner,
  open_issues_count,
  stargazers_count,
  created_at,
}) => {
  const [isLoaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);
  return (
    <Flex
      align="center"
      width="800px"
      borderRadius="40px"
      margin="16px"
      padding="16px"
      borderWidth="1px"
      rounded="lg"
      ml={250}
    >
      <Skeleton isLoaded={isLoaded}>
        <div className="div-style">
          <img className="img-style" src={owner.avatar_url} alt={owner.login} />
        </div>
      </Skeleton>
      <div className="div-style-card">
        <Skeleton isLoaded={isLoaded} height={10} mb={2}>
          <p className="title"> {name} </p>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} height={12} mb={2}>
          <p className="text-style">{description}</p>
        </Skeleton>
        <Skeleton isLoaded={isLoaded} height={10} mt={2}>
          <div className="row">
            <div className="column">
              <Badge rounded="full" px="2" variantColor="teal">
                Stars <span className="badge_nb">{stargazers_count}</span>
              </Badge>
            </div>
            <div className="column">
              <Badge rounded="full" px="2" variantColor="teal">
                Issues <span className="badge_nb">{open_issues_count}</span>
              </Badge>
            </div>
            <div className="column">
              <Badge rounded="full" px="2" variant="subtle">
                <span className="badge_nb">Submitted </span>
                {TimeInterval(`${created_at}`)}
                <span className="badge_nb"> days ago by </span>
                {owner.login}{" "}
              </Badge>
            </div>
          </div>
        </Skeleton>
      </div>
    </Flex>
  );
};
export default RepoCard;
