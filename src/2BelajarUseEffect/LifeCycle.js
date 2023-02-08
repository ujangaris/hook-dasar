// rcc
import React, { Component } from "react"

class LifeCycle extends Component {
  // rcon
  constructor(props) {
    super(props)

    this.state = {
      name: "",
    }
  }
  componentDidMount() {
    // get api dari fake api: jsonplaceholeder
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          // coba tampilkan nama
          name: json.name,
        })
      })
  }
  render() {
    return (
      <div>
        {/* tampilkan satu data nama */}
        <h3>Name :{this.state.name}</h3>
      </div>
    )
  }
}

export default LifeCycle
