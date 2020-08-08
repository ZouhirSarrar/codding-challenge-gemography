import { useState, useEffect } from "react";
import axios from "axios";



 const useReposApi = () => {

    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);

    useEffect(() => {
        getData();
        // eslint-disable-next-line
    }, []);

     const getData = () => {
        if (!hasNextPage) return;
        //we can customize the number of cards per page using the param "&per_page"
        const searchUserURL = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;
        axios.get(searchUserURL).then(({ data: { items, total_count } }) => {
            if (items) {
                if (total_count === repos.length + items.length) {
                    setHasNextPage(false);
                }

                setRepos(repos => [...repos, ...items]);
                setPage(page => page + 1);
            }   
        });
    };

     const loadMoreData = () => {
        if (page > 1) {
            getData();
        }
    };

 
    return[{repos,page,hasNextPage},loadMoreData]
    }

export default useReposApi;