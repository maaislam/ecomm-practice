import React from 'react';

import style from './Header.module.css'

const Header = () => {
    return (
        <div className="ui container">

        
            <div className="ui grid">
                <div className= {`thirteen wide column ${style.header}`}>
                    <div className = "ui huge center aligned header">
                        <h1 className = {style.title} >miss<span>ya</span> </h1>
                        <p>DESIGNED IN DENMARK</p>
                    </div>
                </div>
                <div className="three wide column ">
                    <div className={`ui icon input ${style.searchBox}`}>
                        <input type="text" placeholder="Search..."/>
                        <i className="search icon"></i>
                    </div>
                </div>
            
            </div>
            <hr/>
            <div className= {`ui secondary pointing menu  ${style.menuItems}`}>
                <a className="active item" href = "/">
                    Sortiment
                </a>
                <a className="item" href = "/">
                    Brand
                </a>
               
            </div>
          
        </div>
    );
}

export default Header;
