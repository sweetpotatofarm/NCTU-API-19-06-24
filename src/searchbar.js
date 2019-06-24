import React from 'react'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            searchword: ""
        }
    }
    this.setSearchWords = this.setSearchWords.bind(this)
    setSaerchWords(word){
        this.setSearchState({searchwords : word})
        
    }
    
    render(){
        return(
            <div className="input-group mb-3"> 
                <input type="text"
                  className="form-control"
                  placeholder="Type github name"
                  aria-describedby="button-addon2"
                  onChange={(e) =>this.setSearchWords(e.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2" 
                  onclick={ ()=> this.props.onfetchdata}>send
                  </button>
                </div>
            </div>
        )
    }
}

export default SearchBar 
