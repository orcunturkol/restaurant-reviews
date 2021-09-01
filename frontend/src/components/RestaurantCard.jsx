import React, {useState,useEffect} from "react";
import RestaurantDataService from "../services/RestaurantService"
import Pagination from "./Pagination";
import RestaurantsList from "./RestaurantList";
const RestaurantCard = () =>{

const [restaurants, setRestaurants] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [restaurantsPerPage] = useState(10);


useEffect(() => {
    retrieveRestaurtans();
  },[]);

const retrieveRestaurtans =  () => {
  setLoading(true);
    RestaurantDataService.getAll().then
    (response => {
        setRestaurants(response.data);
        console.log(response.data);
        setLoading(false);
    })
    .catch(e=>{
        console.log(e);
    })
}

//Get current restaurants
const indexOfLastPost = currentPage * restaurantsPerPage;
const indexOfFirstPost = indexOfLastPost - restaurantsPerPage;
const currentPosts = restaurants.slice(indexOfFirstPost, indexOfLastPost);

//Change Page
const paginate = pageNumber => setCurrentPage(pageNumber);
return(
  loading ? <h2><img className="d-block mx-auto w-30" src={process.env.PUBLIC_URL + "images/Spinner-1s-200px.svg"} alt="" /></h2>
  :
  <div>
  <div className="row">
     <RestaurantsList restaurants={currentPosts} />
  </div>
  <div className="p-40">  
      <Pagination
       postsPerPage={restaurantsPerPage}
       totalPosts={restaurants.length}
       paginate={paginate}
     /></div>
     
  </div>

   
)
}

export default RestaurantCard;