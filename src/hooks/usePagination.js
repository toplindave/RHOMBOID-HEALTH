import { useState } from 'react';


export default function  usePagination (data) {
    const [pageNumber, setPageNumber] = useState(0);

    const dataPerPage = 4;
    const pagesVisited = pageNumber * dataPerPage;

    const displayData = data.slice(pagesVisited, pagesVisited + dataPerPage);

    const pageCount = Math.ceil(data.length / dataPerPage);

    const changePage = (selected) => {
        setPageNumber(selected);
       
    }


    return {
        displayData, pageCount, changePage, pageNumber
    }
            
};



// import { useState } from 'react';


// export default function  usePagination (data) {

   

//     const [pageNumber, setPageNumber] = useState(1);

//     const [itemsPerPage, setItemsPerPage] = useState(50); 


//     //index of last result
    

//     const dataPerPage = itemsPerPage;
//     const indexOfLastPage = pageNumber * dataPerPage;
//     const indexOfFirstPage = indexOfLastPage - dataPerPage;

//     const currentResults = data.slice(indexOfFirstPage, indexOfLastPage);

//     const pageCount = Math.ceil(data.length / dataPerPage);

//     const changePage = (selected) => {
//         setPageNumber(selected);
//     }


//     // console.log(currentResults.length);


//     return {
//         currentResults, pageCount, changePage, itemsPerPage, setItemsPerPage, pageNumber, setPageNumber
//     }
            
// };