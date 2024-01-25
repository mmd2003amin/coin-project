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
    <div dir="ltr" className="text-white dark:text-black w-[99%] mx-auto centering py-5 font-vazirRegular buttons-pagination">
      <div onClick={previousPage} className={`${page === 1 && "opacity-40"} next-b mr-0.5 xs:mr-3 text-white`}>قبلی</div>
      <button onClick={pageHandler} className={`${page === 1 && "select-pagination"}`}>1</button>
      <button onClick={pageHandler} className={`${page === 2 && "select-pagination"}`}>2</button>

      {page > 2 && page < 9 && (
        <>
          <span className="mr-0.5 xs:mr-1">...</span>
          <button className={`ml-0.5 xs:ml-1 select-pagination`}>{page}</button>
        </>
      )}
      <span className="ml-0.5 xs:ml-0 mr-0.5 xs:mr-1">...</span>

      <button onClick={pageHandler} className={`${page === 9 && "select-pagination"} ml-1`}>9</button>
      <button onClick={pageHandler} className={`${page === 10 && "select-pagination"}`}>10</button>
      <div onClick={nextPage} className={`${page === 10 && "opacity-40"} next-b text-white`}>بعدی</div>
    </div>
  );
};

export default Pagination;