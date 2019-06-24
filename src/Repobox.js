import React from 'react'
import RepoItem from './repoitem.js'

class Repobox extends React Component {
    render(){
        return (
            <div className = "container">
            {
                this.props.data.length ===0?
                <div>Empty</div>
                :
                <div>
                    {console.log(this.props.data)}
                    {
                        this.props.data.map((repo)=>
                        <RepoItem key={repo.id}/>)
                    }
                </div>
            }
            </div>
        )
    }
}

export default RepoBox