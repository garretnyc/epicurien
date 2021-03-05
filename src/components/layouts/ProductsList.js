import { Grid } from '@material-ui/core';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from "../../components/Product/Product";
import {brandFilter} from "../../pipes/brandFilter";
import {orderByFilter} from "../../pipes/orderByFilter";
/*this needs to be checked next time*/
import {paginationPipe} from "../../pipes/paginationFilter";
//import Pagination from "../../components/Pagination/Pagination";

class ProductList extends Component {

    state = {
        colValue : 'col-lg-4',
        perPage: 12,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };

    changeLayout = (n) => {
        this.setState({gridValue: n});

        let realGridValue;

        if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 4;
        }

      this.setState({
          colValue: `col-lg-${realGridValue}`
      });
    };


    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n
        });
    };


    render() {

        let isActive = this.state.colValue[this.state.colValue.length -1];

        return (
            <Grid lg={12}>
                <div className="row">
                    <Grid lg={12} xs ={12}>
                        <div className="card ">
                            <div className="card-header d-flex justify-content-end">
                                <span className="mr-3">Change Layout: </span>
      
                            </div>
                        </div>
                    </Grid>
                </div>
                <div className="row" style={{display:'flex',margin:"10px 30px"}}>
                {paginationPipe(this.props.products, this.state).map(product =>{
                    let classes = `${this.state.colValue} col-md-3 mb-3`;
                    return (<Grid lg={4} xs={4} style={{display:"flex",
                        flexDirection:"column",
                        alignItems:"center"}}>
                        <Product key={product.id} product={product} />
                    </Grid>)
                })}
            </div>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    const brands = state.brandFilter;
    const orderBy = state.orderBy;

    const filterByBrandArr = brandFilter(state.shop.products, brands);
    const filterByOrderArr = orderByFilter(filterByBrandArr, orderBy);


    return {products: filterByOrderArr }
};

export default connect(mapStateToProps, null)(ProductList);


/*       
   
                <div className="d-flex justify-content-end">
            
                </div>


<Pagination
                        totalItemsCount={this.props.products.length}
                        currentPage={this.state.currentPage}
                        perPage={this.state.perPage}
                        pagesToShow={this.state.pagesToShow}
                        onGoPage={this.goPage}
                        onPrevPage={this.onPrev}
                        onNextPage={this.onNext}
                    />*/