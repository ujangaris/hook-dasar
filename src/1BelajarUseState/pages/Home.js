// rcc
import React, { Component } from "react"
import Hitung from "../components/Hitung"

class Home extends Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <header>
          <h2>Aplikasi Penghitung Jumlah Pengunjung Praxis</h2>
        </header>
        <hr />
        <Hitung />
        <hr />
        <footer>
          <p>&copy; Created By Ujang Arisandi</p>
        </footer>
      </div>
    )
  }
}

export default Home
