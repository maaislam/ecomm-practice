import React, { Component } from 'react';


class SizePicker extends Component {
    state = {
        selection : 'Select a Size',
        
    }




selectionChange = (event) => {

    this.setState({selection: event.target.value},
    () => this.props.sizeSelectionChange(this.state.selection))
    
}



    render() {
        return (
            <div  className = "ui header">
               
                <select className = "ui fluid dropdown" value={this.state.selection} onChange={this.selectionChange}>            
                    <option value="Select a Size">Select a Size</option>
                    {this.props.renderSizeOption}
                </select>
                
               
            </div>
        );
    }
}

export default SizePicker;
