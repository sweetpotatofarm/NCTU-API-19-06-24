import React from 'react'

class Navbar extends React.Component {
    render(){
        return(
            <div className="container p-3">
              <div className= "row justify-content-center">
                <Link to='/' className="mx-3">Home</Link>
                <Link to='/search'>Search</Link>
              </div>
            </div>
        )
    }
}

export default Navbar;