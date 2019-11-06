import React, { Component } from 'react';
import './App.css'
import Nav from './Components/Nav/Nav'
import Search from './Components/Search/Search'
import Products from './Components/Products/Products'
import Likes from './Components/Likes/Likes'
import Sell from './Components/Sell/Sell'
import { firebaseDB } from './Server';

class App extends Component {
  state = {
    route: 'products',
    products: [
      {
        name: 'New General Mathematics',
        seller: 'Godwin Olaoluwa',
        price: 'N 1,300',
        img: 'gal-1.jpeg'
      },
      {
        name: 'Properties of matter',
        seller: 'Felix Samuel',
        price: 'N 950',
        img: 'gal-2.jpeg'
      },
      {
        name: 'C# for beginners',
        seller: 'Brenden Eike',
        price: 'N 15,400',
        img: 'gal-3.jpeg'
      },
      {
        name: 'Introduction to kinematics',
        seller: 'Iseac Newton',
        price: 'N 3,800',
        img: 'gal-4.jpeg'
      },
      {
        name: 'Properties of matter',
        seller: 'Felix Samuel',
        price: 'N 950',
        img: 'gal-5.jpeg'
      },
      {
        name: 'C# for beginners',
        seller: 'Brenden Eike',
        price: 'N 15,400',
        img: 'gal-6.jpeg'
      },
      {
        name: 'Introduction to kinematics',
        seller: 'Iseac Newton',
        price: 'N 3,800',
        img: 'gal-7.jpeg'
      }
    ],
    likes: [],
    inputValue: '',

  }
  componentDidMount(){
    firebaseDB.ref().once('value').then((snapshot)=>{
      console.log(snapshot.val())
    })
  }

  onRouteChange = (route) => {
    this.setState({error: false})
    let route2 = this.state.route
    document.querySelector('.'+route2).classList.remove('route')
    document.querySelector('.'+route).classList.add('route')
    this.setState({route: route})
  }

  filterProducts = (e) => {
    console.log(e.target.value)
    this.setState({inputValue: e.target.value})
  }

  onLike = (item, e) => {
    console.log(e.target)
    if (item.isLiked) {
      e.target.classList.remove('onlike')
      item.isLiked = false
      this.state.likes.forEach((e,i)=>{
        console.log(i,11,e,11111)
        if (item === e) {
          console.log(e, '.........')
          this.state.likes.splice(i, 1)
        }
      })
    } else {
      e.target.classList.add('onlike')
      item.isLiked = true
      this.state.likes.push(item)
    }
  }

  render() {
    const filteredProducts = this.state.products.filter((item)=> 
    item.name.toLocaleLowerCase().includes(this.state.inputValue.toLocaleLowerCase()))

    const filteredLikes = this.state.likes.filter((item)=> 
    item.name.toLocaleLowerCase().includes(this.state.inputValue.toLocaleLowerCase()))
    return (
      <div className="App">
        <header className="App-header">
          <div style={{gridColumn: "2/8"}}>
            <h1 className="heading"> {"NO IDEA🙃"} </h1>
            <p>Nothing more than 25 words to describe the website🤧</p>
            <section className="navsearch">
                <Nav onRouteChange={this.onRouteChange}/>
                <Search filterProducts={this.filterProducts}/>
            </section>
          </div>
        </header>
        <main>
          <section>
            {
              this.state.route === 'products'?
                <Products items ={filteredProducts} onLike={this.onLike}
                 error={this.state.error}/>
              : this.state.route === 'sell'?
                <Sell/>
              : this.state.route === 'likes'?
                <Likes likes={filteredLikes} />
              : null
            }
          </section>
        </main>
      </div>
    );
  }
}

export default App;