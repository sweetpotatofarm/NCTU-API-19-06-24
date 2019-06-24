import React from 'react'
import searchbar from './searchbar'
import axios from
import RepoBox from './repobox'
import RepoItem from './repoitem'

class searchPage extends React.Component{
  constructor(props){
      super(props)
      this.state={
          repoList: []
      }
      this.fetchData = this.fetchData.bind(this)
  }

  fetchdata(username){
      let url = `https://api.github.com/users/$(userName)/repos`
      axios.get(url)
      .then(response =>this.changeRepoList(response.data))
      .catch(err=>console.log(err))
  }

  changeRepoList(data){
      this.setState({repolist : data})
  }

  render(){
        return (
            <div>
                <SearchBar onFetchdata = {this.fetchdata}></SearchBar>
                <RepoBox data={this.state.repoList}></RepoBox>
            </div>
        )
    }
}


export default searchPage