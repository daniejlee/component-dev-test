import React from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {},
      background: ''
    };

    this.changePage = this.changePage.bind(this)
  }

  componentDidMount(){
  }

  //pageName is the id of the menu button that is clicked
  changePage(pageName){
    fetch('./content.json')
    .then(response => response.json())
    .then(data => {
      let pages = data.pages
      let pageData = pages.find(element => element.slug === pageName)
      console.log(pageData.blocks[0].background)
      this.setState({
        pageData: pageData,
        background: pageData.blocks[0].background
      })
      this.changeBackground(this.state.background)
    })
  }

  changeBackground(background){
    document.body.style.backgroundImage = `url(./backgrounds/${background})`;
  }

  render(){

  return (
    <div className="container">
      <Header changePage={this.changePage}/>
      {
        Object.keys(this.state.pageData).length !== 0 &&
          <Content pageData={this.state.pageData}/>
      }
    </div>
    )
  }

}
