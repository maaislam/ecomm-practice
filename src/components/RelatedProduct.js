
import React from 'react';

const RelatedProduct = () => {
    return (
        <div style ={{paddingTop:'2rem', marginBottom:'5rem'}}>
            <div className = "ui header center aligned">
                <h1>Related Products</h1>
            </div>
        
        <div class="ui four cards" style = {{marginTop:'2rem', marginLeft:'-4rem'}}>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
            <div class="content center aligned" style = {{padding:'2rem'}}>
                <div class="header"><h3>N/A</h3></div>
                <div class="description">
                    <h5>DKK 125,00</h5>
                </div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
            <div class="content center aligned" style = {{padding:'2rem'}}>
                <div class="header"><h3>ITEM3</h3></div>
                <div class="description">
                    <h5>DKK 125,00</h5>
                </div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
            <div class="content center aligned" style = {{padding:'2rem'}}>
                <div class="header"><h3>ITEM4</h3></div>
                <div class="description">
                    <h5>DKK 125,00</h5>
                </div>
            </div>
          </div>
        </div>
        <div class="ui card">
          <div class="content">
            <div class="ui placeholder">
              <div class="rectangular image"></div>
            </div>
            <div class="content center aligned" style = {{padding:'2rem'}}>
                <div class="header"><h3>ITEM5</h3></div>
                <div class="description">
                    <h5>DKK 125,00</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
            );
}

export default RelatedProduct;
