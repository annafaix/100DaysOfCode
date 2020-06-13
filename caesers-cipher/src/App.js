import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
   super(props);
   this.state = { 
     value: '', 
     keyValue: 1, 
     cipherValue: '' } 
  };
 
handleInputChange = (event) => {
  this.setState( { value: event.target.value})
}

handleKeyChange = (event) => {
  this.setState( { keyValue: Number(event.target.value)})
} 
clear = () => {
  this.setState( {cipherValue: '', value: ''})
}

 encryptInput = (event) => { 
    let x = event.charCode;
    let xz ;
    if( x === 122 ){ 
      xz = 97 //small letter z -> a
    } 
    else if( x === 90 ){ 
      xz = 65  // big letter Z -> A
    }
    else if( x === 32) { 
      xz = 32   // space is okej
    } 
    else { 
      xz = x + this.state.keyValue
    };
    let nextLetter = String.fromCharCode(xz); 
    this.setState({cipherValue: this.state.cipherValue+nextLetter }); 
 }
 
 render() {
   return (
     <div>
      <Input   
        value={this.state.value}
        cipherValue={this.state.cipherValue}
        keyValue={this.state.keyValue}
        handleInputChange= {(e)=>this.handleInputChange(e) }
        handleKeyChange={(e)=>this.handleKeyChange(e)}
        encrypt={(e)=> this.encryptInput(e)} />
      <ClearButton clear={this.clear} />
    </div>
   )
 }
}

class Input extends React.Component {
 
 render() {
   return(
      <React.Fragment> 
       <label>Choose a key:
       <input  className="keyInput" 
               type="number" 
               min="1"
               value={this.props.keyValue} 
               onChange={ (e)=> this.props.handleKeyChange(e)} />
       </label>
       <textarea type="text" 
         onChange={(e)=> this.props.handleInputChange(e) }
         onKeyPress={(e)=> this.props.encrypt(e) } 
         value={this.props.value}
         placeholder="Type something..."
         className="textInput"/>
       <p>Secert message is: {this.props.cipherValue}</p>
     
     </React.Fragment>
   )
 }
}


class ClearButton extends React.Component  {
  render(){

    return (
      <button onClick={ () => this.props.clear() } className="clearBtn"> 
        Clear
    </button>
  )
  }
}


export default App;
