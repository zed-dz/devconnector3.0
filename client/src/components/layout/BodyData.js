import React, { Component } from 'react';

class BodyData extends Component {

state = {
    query: '',
    data: [],
    searchString:[]
}

handleInputChange = (event) => {
    this.setState({
        query: event.target.value
    },()=>{
  this.filterArray();
})

}

getData = () => {
    fetch(`http://localhost:5000/api/profile`)
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
        this.setState({
            data:responseData,
            searchString:responseData
        })
    })
}

filterArray = () => {
    let searchString = this.state.query;
    let responseData = this.state.data;

    if(searchString.length > 0){
        // console.log(responseData[i].name);
        responseData = responseData.filter(searchString);
this.setState({
   responseData
})
    }

}

componentWillMount() {
    this.getData();
}
render() {
    return (
        <div className="searchForm">
            <form>
                <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
            </form>
            <div>
                {
                    this.state.data.map((i) =>
                        <p>{i.name}</p>
                    )
                }
            </div>
        </div>
    )
  }
}


export default BodyData;