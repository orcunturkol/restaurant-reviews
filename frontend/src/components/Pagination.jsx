import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
const pageNumbers = [];

for(let i=1; i<=Math.ceil(totalPosts/ postsPerPage); i++){ 
    pageNumbers.push(i);
    }
    const lenghtPageNumber = pageNumbers.length;
let dotTrue = false;
    return(
    <nav>
        <ul className="pagination">
            {pageNumbers.map(number=>( 
                number <= 10 ?   
                <li key={number} className="page-item">
                <a className="page-link" onClick={()=>paginate(number)}> {number}
                </a>     
                </li>
                :!dotTrue &&
                <li className= "page-item"><a className="page-link">...{dotTrue=true}</a></li>
            ))}
            <li className="page-item">
                <a className="page-link" onClick={()=>paginate(lenghtPageNumber - 1)}> {lenghtPageNumber - 1 }
                </a>     
                </li>
             <li className="page-item">
                <a className="page-link" onClick={()=>paginate(lenghtPageNumber)}> {lenghtPageNumber}
                </a>     
                </li>
                
        </ul>
    </nav>
    )
    }

    export default Pagination;