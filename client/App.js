import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
constructor(){
    super()
    this.state = {
        title:"",
        year:""
    }
    this.getAll = this.getAll.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.Submit = this.Submit.bind(this);
    this.handleFindTitle = this.handleFindTitle.bind(this);
}
getAll(){
    console.log("movies fetched")
    fetch('http://localhost:10010/movie')
    .then(response => response.json())
    .then(json => {
        console.log("manupulating",json)
     
      
    })
}
handleTitle(e){
    this.setState({
        title:e.target.value
    })
}
handleYear(e){
    this.setState({
        year:e.target.value
    })
}
Submit(){
 var obj = {
     title:this.state.title,
     year:parseInt(this.state.year)
 }
    console.log("this is to be sent",obj)
    fetch("http://localhost:10010/movie",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({title:obj.title,year:obj.year})
    }) .then(res =>
        res.json()
    )
    .then((res) => {
    })
}
handleFindTitle(){
console.log("searched",this.state.title)
var title=this.state.title;
fetch('http://localhost:10010/movie/'+title)
.then(response => response.json())
.then(json => {
    console.log("manupulating",json)
 
  
})
}

    render() {
        return (
            <div>
              <h1>swagger!!!</h1>
              <input type="button" value="get movies" onClick={this.getAll}/> 
              <h5>Add movies</h5>   
              <input type="text" onChange={this.handleTitle} placeholder="title"/>
              <input type="text" onChange={this.handleYear} placeholder="year"/>
              <input type="button" onClick={this.Submit} value="Submit"/>
              <h5>find by title</h5>
              <input type="text" onChange={this.handleTitle} placeholder="title"/>
              <input type="button" value="find" onClick={this.handleFindTitle}/>
            </div>
        )
    }
}
export default App;