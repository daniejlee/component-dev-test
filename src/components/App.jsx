import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'industries'
    };

    this.setPage = this.setPage.bind(this)
  }

  setPage(name){
    this.setState({
      page: name
    })
  }

  render(){
    return
  }

}
