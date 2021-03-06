import React from 'react'
import './app.css'
import './normalize.css'
import img from './img/SG-logo.png'

function Header() {
    return(
        <div className='l-header'>
            <nav>
                <ul>
                    <li><img src={img} alt="logo"/></li>
                    <li><a href="#Characters">Characters</a></li>
                    <li><a href="#Boss">Boss</a></li>
                    <li><a href="#trailer">Trailer</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;