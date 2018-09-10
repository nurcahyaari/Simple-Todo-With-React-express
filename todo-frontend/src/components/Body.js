import React, { Component } from 'react';
class Body extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: this.props.bodyProp.data,
        
        countData : 0
      }
      this.tampilData = this.tampilData.bind(this);
      this.remove = this.remove.bind(this);
    }
  
    tampilData(){
      this.props.bodyProp.data.map(body => {
        <div>
          {body}
        </div>
      })
    }
  
    remove(e){
      this.props.removeData(e);
    }
  
    render(){
      const {bodyProp} = this.props;
      let todo = this.props.bodyProp.data.map(function(todos, no){
        return(
          <tr>
            <td width = "5%"> {no + 1} </td>
            <td width = "90%">
              {todos.value_todo}
            </td>
            <td onClick = {() => this.remove(todos)}>x</td>
          </tr>
        )
      }, this)
  
      return(
        <div className="row justify-content-md-center">
        {/* <button onClick = {this.tampilData}>Klik</button> */}
        <div className="todo col-md-12" id="todoValue">
          <table className="table">
            <tbody>
              {todo}
            </tbody>
          </table>
        </div>
        </div>
      )
    }
}

export default Body;

  