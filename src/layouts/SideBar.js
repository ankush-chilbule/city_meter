import React from 'react'
import {Link} from 'react-router-dom'
export default ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/' className="text_reversed">
                        City Health Meter
                    </Link>
                </li>
                {/* <li>
                    <Link to='/ward' className="text_reversed">
                        Ward Meter
                    </Link>
                </li> */}
                <li>
                    <Link to='/wealth' className="text_reversed">
                        City Wealth Meter
                    </Link>
                </li>
            </ul>
        </nav>
    )
}