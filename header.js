import React from 'react';
import {Link} from 'react-router-dom';
const Header = ()=>{
    return(
        <nav>
            <ul>
             
                <li><Link to ="/counter" className="pagelink">Counter</Link></li>
                </ul>
        </nav>
    )
}
export default Header;