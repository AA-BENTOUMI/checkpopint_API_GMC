import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCards from "../../Components/CocktailCards/CocktailCards";
import Pagination from "../../Components/Pagination/Paginations";
import "./Cocktails.css";
import { Spinner } from "react-bootstrap";
const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const getCocktails = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        setCocktails(response.data.drinks);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getCocktails();
  }, [searchTerm]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cocktails
    ? cocktails.slice(indexOfFirstPost, indexOfLastPost)
    : null;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const totalPosts = cocktails ? cocktails.length : null;
  return (
    <div>
      <h1>Welcome, this is the Cocktails List Page</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      {isLoading ? (
        <Spinner animation="border" />
      ) : isError ? (
        <h1>Error To fetching Data</h1>
      ) : (
        <div className="cocktail-Cards">
          {currentPosts ? (
            currentPosts.map((el) => (
              <CocktailCards data={el} key={el.idDrink} />
            ))
          ) : (
            <h2>no result</h2>
          )}
        </div>
      )}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    </div>
  );
};

export default Cocktails;
