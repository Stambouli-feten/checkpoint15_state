import React from "react"
import './App.css';

class App extends React.Component {
  state={person:{ fullName:"Feten Stambouli",
  bio:"Mechatronic Engineer and Full Stack Developer", 
  imgSrc: "https://scontent.ftun9-1.fna.fbcdn.net/v/t1.0-9/87886407_484053362273458_2034540619593940992_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8bfeb9&_nc_ohc=M6YtXw6-GA0AX9SigJy&_nc_ht=scontent.ftun9-1.fna&oh=46d8a6f1c4d403b8e7de367867dc8d39&oe=5FCF5FF9",
  profession:"Web Developer"},
  show: false,
  counter: 0 }
  handleClick = () =>{
    this.setState({show : !this.state.show})
  };
  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    };
  
    componentDidMount() {
      setInterval(this.incrementCounter, 1000);
    }
  render(){
  
    return (
    <div className="App">
      {this.state.show?
      <div> <p>Full Name : {this.state.person.fullName}</p>
      <p>Bio : {this.state.person.bio}</p>
      <p>Profession : {this.state.person.profession}</p>
      <img src={this.state.person.imgSrc} alt="img"/>
      <h3>{this.state.counter} secondes</h3>
      </div>
      : null}
    <button onClick={this.handleClick}>Show More/Less</button>
    
    </div>
  );
  }
}

export default App;
