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
          //  2  tambahkan field
          isUpdate: false,
        })
      })
  }
  //   3 buat method handleSubmit() yang menampung url api update
  handleSubmit = (event) => {
    event.preventDefault()
    // jalankan api update
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: this.state.name,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // cetak pada console ketika button di klik submit
        // console.log(json)
        // perbaharui state ketika button di klik submit
        this.setState({
          isUpdate: true,
        })
      })
  }
  //   4 buat componentDidUpdate()
  componentDidUpdate() {
    // tampung state kedalam isUpdate
    const { isUpdate } = this.state
    // buat kondisi jika isUpdate true maka jalankan alert
    if (isUpdate) {
      alert("Nama sukses di update")
      //  setelah alert muncul maka ubah state isUpdate menjadi false
      this.setState({
        isUpdate: false,
      })
    }
  }
  render() {
    return (
      <div>
        {/* tampilkan satu data nama */}
        <h3>Name :{this.state.name}</h3>
        <hr />
        <h3>Update Name </h3>
        {/* 1 buat form untuk update data api */}
        {/* 5 pasang method yang kita pasang kedalam onSubmit */}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type={"text"}
            placeholder={"Change Name"}
            name={"name"}
            onChange={(event) => this.setState({ name: event.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default LifeCycle
