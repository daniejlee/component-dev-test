import React from 'react';
//import Background from './Background'
import Header from './Header'
import Content from './Content'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: {}
    };

    this.changePage = this.changePage.bind(this)
  }

  componentDidMount(){
    console.log('hello')
    this.changeBackground()
  }

  //pageName is the id of the menu button that is clicked
  changePage(pageName){
    fetch('./content.json')
    .then(response => response.json())
    .then(data => {
      let pages = data.pages
      let pageData = pages.find(element => element.slug === pageName)

      this.setState({
        pageData: pageData
      })
    })

  }

  //combine this into changePage()
  changeBackground(){
    let background = 'slide_one.jpg';
    // backgroundImage: `url(${background})`
    document.body.style.backgroundImage = `url(./backgrounds/${background})`;
    let bodyStyle = {
      backgroundImage: `url(./backgrounds/${background})`,
    };
  }

  render(){

  return (
    <div>
      <Header changePage={this.changePage} changeBackground={this.changeBackground}/>
    {/* <div className='container'> */}
      <Content pageData={this.state.pageData}/>
    </div>
    )
  }

}
