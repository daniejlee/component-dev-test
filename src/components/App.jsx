import React from 'react';
import Background from './Background'
import Header from './Header'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'industries',
      type: '',
      pageContent: null,
      background: ''
    };

    this.changeContent = this.changeContent.bind(this)
  }

  componentDidMount(){
    this.changeContent('services')
  }

  //name parameter is the id/key? of the menu button that is clicked
  changeContent(pageName){

    fetch('./content.json')
    .then(response => response.json())
    .then(data => {
      let pages = data.pages
      let pageData = pages.find(element => element.slug === pageName)
      console.log(pageData)

      this.setState({
        page: pageName,
        pageContent: pageData
      })


    })

  }



  render(){
    let currentPage;
    switch (this.state.page){
      case 'industries':
        // currentPage = (
        //   <div></div>
        // )'
        console.log('industries')
        break;

      case 'services':
        console.log('services');
          break;

      default:
        return null;
    }
  return (
  <div>
    <Background backgroundImg={this.state.img}/>
    <Header />

  </div>
  )
  }

}
