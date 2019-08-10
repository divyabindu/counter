import React,{Component} from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter : 0,
      img: "https://i.gifer.com/XlW0.gif" 
     }
  }

  increment(){
    if(this.state.counter < 10){
      this.setState({
        counter: this.state.counter + 1 ,
      })
    }else if(this.state.counter === 10){
      this.setState({
        img: "https://media.giphy.com/media/xUPGcfbMG6a2k2z57O/giphy.gif" 
      })
    }
  }

  decrement(){
 if(this.state.counter > 0){
  this.setState({
    counter : this.state.counter - 1 
  })
}
 }

  reset(){
  this.setState({
    counter: 0,
    img: "https://i.gifer.com/XlW0.gif" 
  })
  }

  render() { 
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>{this.state.counter}</h1>
              <img src={this.state.img} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <button type="button" className="btn btn-primary font-weight-bold float-right" onClick={this.increment.bind(this)}> + </button>
            </div>
            <div className="col-md-4 text-center">
              <button type="button" className="btn btn-primary font-weight-bold" onClick={this.reset.bind(this)}> Reset </button>
            </div>
            <div className="col-md-4">
              <button type="button" className="btn btn-primary font-weight-bold float-left" onClick={this.decrement.bind(this)}> - </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;


