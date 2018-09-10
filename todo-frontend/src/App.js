import React, { Component } from 'react';
import Header from './components/Header'
import Body from './components/Body';
import axios from 'axios';
import app from './App.css'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      input : '',
      update : false
    }
    this.showData = this.showData.bind(this);
    this.addDataE = this.addDataE.bind(this);  
    this.addData = this.addData.bind(this);
    this.removeData =  this.removeData.bind(this);
  }

  componentWillMount(){
    axios.get("http://localhost:3001/")
    .then(data => {
      this.setState({data : data.data});
    })
  }

  showData(){
    for(var i = 0; i < this.state.countData; i++){
      console.log(this.state.data[i]);
    }
  }

  removeData(e){
    function remove(array, element) {
      axios.delete("http://localhost:3001/", {
        "data" : element
      })
      .then(data => {
        console.log(data);
      })
      const index = array.indexOf(element);
      array.splice(index, 1);
      console.log(array);
      
    }
    let newData = remove(this.state.data, e);
    this.setState({
      update: true
    })
  }

  addData(){
    let todo = this.state.data;

    if(this.state.input.value !== ""){
      axios.post('http://localhost:3001/', {
        todo : this.state.input.value
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      todo.push({id : '',value_todo : this.state.input.value, createdAt : '', updatedAt : ''});
      this.setState({
        data: todo,
        input : '',
      })
      this.state.input.value = '';
    }
  }

  addDataE(e){
    let todo = this.state.data;
    if((e.key === 'Enter' || e.keyCode === 13) && e.target.value !== ""){
      console.log(e.target.value)
      axios.post('http://localhost:3001/', {
        todo : e.target.value
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
      todo.push({id : '',value_todo : e.target.value, createdAt : '', updatedAt : ''});
      this.setState({
        data: todo,
        input : '',
      })
      e.target.value = '';
    }
  }

  render() {
    return (
      <div className="container">
        <Header headerProp = {this.state} addDataE = {this.addDataE} addData = {this.addData}/>
        <br/>
        <Body bodyProp = {this.state} removeData = {this.removeData}/>
      </div>

    );
  }
}



export default App;
