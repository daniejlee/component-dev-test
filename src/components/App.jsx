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

  //takes the page slug as parameter
  changePage(pageName){
    fetch('./content.json')
    .then(res => res.json())
    .then(data => {
      let pages = data.pages
      let pageData = pages.find(element => element.slug === pageName)
      this.setState({
        pageData: pageData,
        background: pageData.blocks[0].background
      })
    })
  }

  render(){
    return (
      <>
        <div className="background" style={{ backgroundImage: `url(./backgrounds/${this.state.background})` }}></div>
        <div className="page-layout">
          <Header changePage={this.changePage}/>
          {
            Object.keys(this.state.pageData).length !== 0 &&
              <Content pageData={this.state.pageData}/>
          }
        </div>
      </>
      )
    }
}
