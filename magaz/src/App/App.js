import { Component } from "react";

import Katalog from "../katalog-app/katalog-app";
import Menu from "../Menu-app/menu-app";
import ControlledCarousel from "../slider-app/slider-app";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../footer-app/footer-app";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : [
        {img: "https://static.insales-cdn.com/r/ZAOpOqRL5lI/rs:fit:320:0:1/plain/images/products/1/6867/434707155/large_tovar__27_.jpg" , price: 6590, description: "Название вашего товара будет здесь" , id: 1},
        {img: "https://static.insales-cdn.com/r/VAR9XCfPrq0/rs:fit:320:0:1/plain/images/products/1/7180/434707468/large_14.jpg" , price: 1090, description: "Название вашего товара будет здесь" , id: 2},
        {img: "https://static.insales-cdn.com/r/tkqMrraqbWc/rs:fit:320:0:1/plain/images/products/1/7123/434707411/large_tovar__36_.jpg" , price: 1690, description: "Название вашего товара будет здесь" , id: 3},
        {img: "https://static.insales-cdn.com/r/kdzo2UiOdHU/rs:fit:320:0:1/plain/images/products/1/2296/434710776/large_tovar__34_.jpg" , price: 7500, description: "Название вашего товара будет здесь" , id: 4},
        {img: "https://static.insales-cdn.com/r/e2PP04PN-fE/rs:fit:320:0:1/plain/images/products/1/2340/434710820/large_9.jpg" , price: 5990, description: "Название вашего товара будет здесь" , id: 5},
        {img: "https://static.insales-cdn.com/r/gFUBY7itxM4/rs:fit:320:0:1/plain/images/products/1/7049/434707337/large_7.jpg" , price: 16590, description: "Название вашего товара будет здесь" , id: 6},
        {img: "https://static.insales-cdn.com/r/Sv2XISJZ_d0/rs:fit:320:0:1/plain/images/products/1/2406/434710886/large_27.jpg" , price: 650, description: "Название вашего товара будет здесь" , id: 7},
        {img: "https://static.insales-cdn.com/r/7WhjOyaqeTQ/rs:fit:320:0:1/plain/images/products/1/6926/434707214/large_10.jpg" , price: 1490, description: "Название вашего товара будет здесь" , id: 8},
      ],
      schet: 0,
    }
  }

  onShet = () => {
      this.setState(({schet}) => ({
        schet: schet + 1
      }))
  
  }

  render() {
    const {data,schet} = this.state;

    return ( 
      <div className="App">
        
        <Menu schet={schet}/>
        <ControlledCarousel/>
        <Katalog 
        data={data}
        onShet={this.onShet}/>
        <Footer/>
      </div>
    );
  }
  
}

export default App;
