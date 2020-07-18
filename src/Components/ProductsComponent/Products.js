import React from 'react';
import axios from 'axios';
import './Products.css'
class Products extends React.Component {
     
    constructor(props){
        super(props)

        this.state = {
            products : []
        };
    };

    componentDidMount(){
        console.log('hi')
        axios
        .get("http://localhost:8000/products")
        .then((response) => {
            this.setState({products:response.data})
        }).catch((error)=> {
            console.log(error.status)
        })
        

    }

    render() {

        const products = this.state.products.map(product =>
            <div className='col-sm-1 col-lg-4 col-md-6'>
                <div className='thumbnail'>{product.id}</div>
            </div>
        )

        return (
            <div className='product'>
                <div className='productbar-heading'>
                    <h1>Products</h1>
                </div>
                <div className='row'>
                    {products}
                </div>
            </div>
        );
    };

}
export default Products;