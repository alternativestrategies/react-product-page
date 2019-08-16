import React, {Component} from "react";
import Product from './Product';
import Menu from './Menu';
import Products from '../../Data.json';

class ProductList extends Component {
  state = {
    type: "",
    checked: false,
    selectedOption: ""
  }

  toggleCheck = () => {
    this.setState({
      checked: !this.state.checked
    }, () => console.log(this.state.checked))
  }

  handleChange = (selectedOption) => {
    this.setState({
      type: selectedOption.value,
      selectedOption: selectedOption.label
    }, () => console.log(this.state.selectedOption))
  }

  render() {
    let results = [];

    if(this.state.checked === true){
      Products.sort((a,b) => {
        return b.price - a.price;
      })
    }
    else if (this.state.checked === false){
      Products.reverse(Products.price)
    }
    

    Products.filter(product => {
      if (this.state.type  === "All" || this.state.type === ""){
        results.push(<Product name={product.name} price={product.price} photos={product.photos} description={product.description}/>);
      } 
      if (this.state.type === product.type){
        results.push(<Product name={product.name} price={product.price} photos={product.photos} description={product.description}/>);
      }
      return;
    }
    )

      return (
        <div className="no-bg ">
          <Menu 
          selectedOption={this.state.selectedOption}
          toggleCheck={this.toggleCheck}
          checked={this.state.checked}
          category={this.category}
          handleChange={this.handleChange}/>
        <div className="grid">
        {results}
        </div>
        </div>
      );
    }
}
export default ProductList;
