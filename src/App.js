import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      peopleInSpace: []
    }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => this.setState({
      peopleInSpace: data.people
    }))
  }
  render() {
    return (
      <div>{this.state.peopleInSpace.map((person, index) =>
        <ul key={index}>{person.name}</ul>
      )}
      </div>
    )
  }
}
