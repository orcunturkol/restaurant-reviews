import React from "react";
import "../css/RestaurantCard.css"
const RestaurantsList = ({restaurants}, props)=>{
  const handleDelete = (id, index) => {
    props.onDelete(id,index)
  }
    return(
        restaurants.map((restaurant,index) => (
            <div className="col-sm-6 col-md-4 p-40">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title" key={restaurant.id}>{restaurant.name}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <button onClick={handleDelete(restaurant.id, index)} type="button" class="btn btn-danger">Delete</button>
              </div>
            </div>
          </div> 
    )
        )
    )
}

export default RestaurantsList;