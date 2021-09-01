import './css/App.css';
import RestaurantCard from './components/RestaurantCard';
import Header from './components/Header';
import React, {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component{
  render(){
    return(
<div>  
      <Header/> 
      <RestaurantCard />
    
    </div>
    )
  }
}
export default App;
