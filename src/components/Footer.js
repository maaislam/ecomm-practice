import React from 'react'

export default function Footer() {
    return (
        <div class="ui inverted vertical footer segment" style ={{padding:'5rem 0'}}>
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h1 class="ui inverted huge header">missya</h1>
          <div class="ui inverted link list">
            <div href="/" class="item">Kongensgade 20</div>
            <div href="/" class="item">5000 Odense C</div>
            <div href="/" class="item">Denmark</div>
           
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Contact</h4>
          <div class="ui inverted link list">
            <a href="/" class="item">Phone: +4596100020</a>
            <a href="/" class="item">Email: info@missya.dk</a>
            <a href="/" class="item">CVR: 27 47 79 17</a>
            
          </div>
        </div>
        <div class="seven wide column">
          <h2 class="ui inverted header">Information</h2>
          <div class="ui inverted link list">
            <a href="/" class="item">Contact</a>
            <a href="/" class="item">Sales & Delivery Terms</a>
           
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}
