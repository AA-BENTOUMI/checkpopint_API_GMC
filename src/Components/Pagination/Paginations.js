import React from "react";
import { Pagination } from "react-bootstrap";

const Paginations = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} onClick={() => paginate(i)}>
        {i}
      </Pagination.Item>
    );
    // console.log(pageNumbers);
  }
  return (
    <div>
      <Pagination size="lg" style={{ justifyContent: "center" }}>
        {pageNumbers}
      </Pagination>
    </div>
  );
};

export default Paginations;
