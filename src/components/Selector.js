import React, { Component } from 'react';
import axios from 'axios'
import ColorPicker from './ColorPicker';
import SizePicker from './SizePicker';



class Selector extends Component {

    state = {
        colorSelection : 'Select a Color',
        sizeSelection: 'Select a Size',
        items:[],
        colorVariations:[],
        sizeVariations:[]
    }

    componentDidMount() {
    axios.get('http://localhost:8000/product-variant')
        .then( (response) => {
        // handle success

            this.setState({
                items:response.data.data.items,
                
            });
        
        });

    

    
    }

    


    selectionChange = (res) => {
        this.setState({
            colorSelection:res   
        },() => {
            this.arrOfAllVariation(this.state.colorSelection)
            this.props.renderProductColor(this.state.colorSelection)
            } );
       
            
        
    }


    arrOfAllVariation = (variation) => {

        let arr = this.state.items.map( (item) => {

         
            return item.inventoryCount > 0 ? item.variantValues : []
        })
        
        let newArr =  [...new Set(arr)]

        const result = newArr.filter(item => item.find(el => el === variation) );

       if (variation===this.state.colorSelection){
           const test = [...new Set(result.flat().filter((word)=>word.length < 2))] 
           console.log(test)
           this.setState({
            sizeVariations:test
        })
           
       }else if (variation===this.state.sizeSelection){
        const test1 = [...new Set(result.flat().filter((word)=>word.length > 2))] 
        console.log(test1)
         this.setState({
            colorVariations:test1
        })
           
       }
       
        
    }

    //method for rendering dropdown option
    renderColorOption = () => {
          
        
        /**
         * code to check if a specefic color has inventory count
         */
        let x = this.state.items.map( (item) => {

         
            return item.inventoryCount > 0 ? item.variantValues[0] : null
        })
        
        let arr =  [...new Set(x)]
        
        /**
         * code to render dropdown color options
         */

        if (this.state.sizeSelection==='Select a Size'  ) {
            return arr.map((arrItem, index) => {
                if (arrItem){
                    return <option key = {index} value={arrItem}>{arrItem}</option>
                } else{
                    return null
                }
            })
        
        } else {
        
            //console.log(this.state.itemVariations.flat().filter((word)=>word.length > 2))
            return this.state.colorVariations.map((arrItem,index) => {
                        
                if (arrItem){
                    console.log(arrItem)
                    return <option key = {index} value={arrItem}>{arrItem}</option>
                } else{
                    return null
                }
            })
        }
    }
            

/**
 **************************************** code for size options**************************************************************************
 */


    sizeSelectionChange = (res) => {

        this.setState({
            sizeSelection:res   
        },() => {
            this.arrOfAllVariation(this.state.sizeSelection)
            
        });
    }



    renderSizeOption = () => {
         /**
         * code to check if a specefic color has inventory count
         */
        let x = this.state.items.map( (item) => {

         
            return item.inventoryCount > 0 ? item.variantValues[1] : null
        })
        
        let arr =  [...new Set(x)]
        //console.log(arr)
        /**
         * code to render dropdown color options
         */

        if (this.state.colorSelection==='Select a Color' ) {
            return arr.map((arrItem, index) => {
                        if (arrItem){
                            
                            return <option key = {index} value={arrItem}>{arrItem}</option>
                        } else{
                            return null
                        }
                })
        }
        
        else {
            //console.log(this.state.itemVariations.flat().filter((word)=>word.length < 2))
            return this.state.sizeVariations.map((arrItem,index) => {
                        
                        if (arrItem){
                        
                            return <option key = {index} value={arrItem}>{arrItem}</option>
                        } else{
                            return null
                        }
            })
        }
       
    }

    renderAddToBasketbtn = () =>{
        if ((this.state.colorSelection !=='Select a Color') && (this.state.sizeSelection!=='Select a Size') ){
            return (
                <div className="ui grid" style = {{marginTop:'2rem'}}>
                        <div class="ui input three wide column">
                            <input type="text" placeholder="Quat..."/>
                        </div>
                        <div className="  thirteen wide column">
                            <button class="ui fluid black button">ADD TO BASKET</button>
                        </div>
                        
                    </div>  
            )
        } else {
            return (
                <div class="ui fluid placeholder" style = {{opacity:'0'}}> 
                <div className="ui grid" style = {{marginTop:'2rem'}}>
                        <div class="ui input three wide column">
                            <input type="text" placeholder="Quat..."/>
                        </div>
                        <div className="  thirteen wide column">
                            <button class="ui fluid black button">ADD TO BASKET</button>
                        </div>
                        
                    </div>  
                </div>
            )
        }
    }



    render() {
        return (
            <>
                <ColorPicker 
                    renderColorOption = {this.renderColorOption()}
                    selectionChange = {this.selectionChange}
                />
                <SizePicker
                   renderSizeOption = {this.renderSizeOption()}
                   sizeSelectionChange =  {this.sizeSelectionChange}
                />
                <div>
                    {this.renderAddToBasketbtn()}
                </div>
                
            </>
        );
    }
}

export default Selector;
