import React from 'react';
import Dog from '../dog';

class Hello extends React.Component {

  constructor(props) {
    super(props);
    this.getImg = this.getImg.bind(this);
    this.getImg();
    this.defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif';
    this.state = {
      image: this.defaultImg
    }
  }

  getImg() {
    this.setState({image: this.defaultImg});
    const img = fetch('https://dog.ceo/api/breeds/image/random')
    .then(result => result.json())
    .then(result => {
      this.setState({ image: result.message });
    })
    .catch(err => console.log(err))
  }


  render() {
    // const { names} = this.props;
    // const namesArr = names.map((name, i) => (
    //   <h1 key={i}>hola {name}</h1>
    // ))
    return (
      <div>
        <Dog img={this.state.image}/>
        <button onClick={this.getImg}>siguiente</button>
      </div>
    );
  }
}

export default Hello;