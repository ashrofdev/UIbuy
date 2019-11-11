import React, { Component } from 'react';
import './App.css'
import Nav from './Components/Nav/Nav'
import Search from './Components/Search/Search'
import Products from './Components/Products/Products'
import Likes from './Components/Likes/Likes'
import Sell from './Components/Sell/Sell'
import { firebaseDB } from './Server';
import ProductDetails from './Components/ProductDetails/ProductDetails';

class App extends Component {
  state = {
    route: 'products',
    buy: true,
    products: [
      {
        product_name: 'test',
        seller_name: 'tester',
        product_price: '2000',
        product_negotiability: 'negotiable',
        seller_phone: '08169094945',
        product_details: 'This is super story.....'
      }
    ],
    product: {},
    likes: [],
    inputValue: '',
  }
  componentDidMount(){

    const items = []
    firebaseDB.ref('products').once('value').then(snapshot=>{
      snapshot.forEach(e => {
        items.push(e.val())
      });
      this.setState({products: items})
        console.log(this.state.products)
    })
    // firebaseDB.ref('products').once('value').then((snapshot)=>{
    //   console.log(snapshot.val())
    //   snapshot.val().forEach(function(item){
    //     items.push(item)
    //   })
    //   // Object.entries(snapshot.val()).map(e => {
    //   //   items.push(e[1])
    //   // })
    //   this.setState({products: items})
    // })
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

  viewDetails = (item)=>{
    document.querySelector(".products"||".likes").classList.remove('route')
    this.setState({
      product: item,
      route: 'details'
    })
  }
 

  render() {
    const filteredProducts = this.state.products.filter((item)=> 
    item.product_name.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase()))

    const filteredLikes = this.state.likes.filter((item)=> 
    item.product_name.toLowerCase().includes(this.state.inputValue.toLocaleLowerCase()))
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
                <Products viewDetails={this.viewDetails} items ={filteredProducts} onLike={this.onLike}
                 error={this.state.error}/>
              : this.state.route === 'sell'?
                <Sell/>
              : this.state.route === 'likes'?
                <Likes likes={filteredLikes} />
              : this.state.buy?
                <ProductDetails product={this.state.product}/>
              : null
            }
          </section>
        </main>
      </div>
    );
  }
}

export default App;