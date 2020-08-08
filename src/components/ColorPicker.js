import React, { Component } from 'react';



class ColorPicker extends Component {
    state = {
            selection : 'Select a Color',
            
        }

    


    selectionChange = (event) => {

        this.setState({selection: event.target.value},
        () => this.props.selectionChange(this.state.selection))
        
    }


    render() {
        return (
            <div  className = "ui header" >
                <label>
                
                <select className = "ui fluid dropdown" value={this.state.selection} onChange={this.selectionChange}>            
                    <option value="Select a Color">Select a Color</option>
                    {this.props.renderColorOption}
                </select>
                </label>
               
            </div>
        );
    }
}

export default ColorPicker;
