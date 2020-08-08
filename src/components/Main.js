import React, { Component } from 'react';
import axios from 'axios'

import Selector from './Selector'
import YoutubeModal from './YoutubeModal'
class Main extends Component {

    state = {
        productDetail:[],
        productColor:'',
        openModal:false
    }

    componentDidMount() {
        axios.get('http://localhost:8000/product-detail')
            .then( (response) => {
            // handle success
                
                this.setState({
                    productDetail:response.data.data.items
                    
                },() => console.log(this.state.productDetail)
                );
            
            });
        
        }

        renderProductDetail = () => {
            return this.state.productDetail.map((product, index) => {
                return(
                    <div key = {index}>
                        <div className="ui header" >
                            <h1>{product.name}</h1>
                            <h5>{product.shortDesc}</h5>
                            <h2>{product.salesPrices.map((el) => el.tagPriceFormatted )}</h2>
                        </div>
                    </div>
                )
            })
        }

        renderDescription = () => {
            return this.state.productDetail.map((product, index) => {
                return(
                    <div className = "ui grid" key = {index} >
                        <div className="seven wide right floated column" >
                            
                            <h5 style = {{paddingRight:'8rem', marginTop:'4rem'}}>{product.salesPrices.map((el) => el.description)}</h5>
                        </div>
                    </div>
                )
            })
        }


        renderProductColor = (color) => {
            this.setState({
                productColor:color
            })
        }


        renderIframe = () => {
        
            return (
                
                <iframe title = "trailer" width="950" height="540" src={`https://www.youtube.com/embed/bgiPTUy2RqI?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
            )
        }
        
        closeModal = () => {

            this.setState({openModal:false})
        }

        openModal = () => {
            if (this.state.openModal){
                return (
                <YoutubeModal 
                    closeModal = {this.closeModal}
                    content = {this.renderIframe()}
                    />
                )
            }else{
                return null
            }
            
            
        }
    
    render() {
        return (
            <div className = "ui grid" style = {{paddingBottom:'3rem'}}>
                <div className="eight wide column" style ={{backgroundColor:this.state.productColor}}></div>
                <div className="eight wide coulumn" style = {{marginLeft:'5rem'}}>
                    {this.renderProductDetail()}
                        <div className="ui content" style = {{marginTop:'2rem'}}>
                        <Selector renderProductColor = {this.renderProductColor}/>  
                        </div>
                </div>
              
                {this.renderDescription()}
                <button class="ui youtube button" onClick = {()=> this.setState({openModal:true})}>
                    <i class="youtube icon"></i>
                    YouTube
                </button>
                {this.openModal()}
            </div>
        );
    }
}

export default Main;
