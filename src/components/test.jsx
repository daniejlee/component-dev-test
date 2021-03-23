import React, {useState, useEffect} from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
    console.log(this.state.titles)
  }



  componentDidMount(){
    console.log('hello')
    fetch('./content.json')
      .then(res => res.json())
      .then(data => {
        let pages = data.pages
        console.log(pages)
        let pagesArray = [];
        for (let key in pages) {
          pagesArray.push(pages[key].title)
        }
        console.log(pagesArray)
        this.setState({
          titles: pagesArray
        })
        console.log(this.state)
      })
  }

render(){
  console.log(this.state.titles)
  return (
    <div>Hellolol</div>

    )
  }

}
