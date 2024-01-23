import React from "react";

const Pagination = ({ page, setPage }) => {
  const pageHandler = (event) => {
    setPage(+event.target.innerText);
  };

  const nextPage = () => {
    page < 10 && setPage((page) => ++page);
  };

  const previousPage = () => {
    page > 1 && setPage((page) => --page);
  };

  return (
    <div dir="ltr" className="text-white centering py-5 font-vazirRegular buttons-pagination">
      <div onClick={previousPage} className={`${page === 1 && "opacity-40"} next-b mr-3`}>قبلی</div>
      <button onClick={pageHandler} className={`${page === 1 && "bg-blue-600"}`}>1</button>
      <button onClick={pageHandler} className={`${page === 2 && "bg-blue-600"}`}>2</button>

      {page > 2 && page < 9 && (
        <>
          <span className="mr-1">...</span>
          <button className={`ml-1 bg-blue-600`}>{page}</button>
        </>
      )}
      <span className="mr-1">...</span>

      <button onClick={pageHandler} className={`${page === 9 && "bg-blue-600"} ml-1`}>9</button>
      <button onClick={pageHandler} className={`${page === 10 && "bg-blue-600"}`}>10</button>
      <div onClick={nextPage} className={`${page === 10 && "opacity-40"} next-b`}>بعدی</div>
    </div>
  );
};

export default Pagination;