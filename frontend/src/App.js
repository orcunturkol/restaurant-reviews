import './css/App.css';
import RestaurantCard from './components/RestaurantCard';
import Header from './components/Header';
import React, {Component} from "react"

class App extends Component{
  render(){
    return(
<div>  
      <Header/> 
      <div class="row">
      <RestaurantCard />
      </div>
    
    </div>
    )
  }
}
export default App;
