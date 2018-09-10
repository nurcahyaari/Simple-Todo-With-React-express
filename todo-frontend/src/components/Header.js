import React, { Component } from 'react';
class Header extends Component {
    constructor(props){
      super(props);
      this.state = {
        input : ''
      }
  
      
    }
    
    render(){
      console.log(this.props.headerProp.input)
      return (
        <header>
          <div className = "App-header">
            <div className = "App-title"> React To-Do</div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                      <button className="btn btn-secondary" onClick = {this.props.addData} id="addTodo">
                          <i className="fas fa-plus-circle"></i>
                      </button>
                  </div>
                  {/* <input type="text" ref = {el => {this.props.headerProp.input = el}} onKeyDown = {this.props.addDataE} id="todoText" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/> */}
                  <input type="text" ref = {todo => this.props.headerProp.input = todo} onKeyDown = {this.props.addDataE} id="todoText" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
                </div>
              </div>
          </div>
        </header>
      );
    }
  }

  export default Header; 