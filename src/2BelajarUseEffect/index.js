// rcc
import React, { Component } from "react"
// import LifeCycle from "./LifeCycle"
import LifeCycleFunc from "./LifeCycleFunc"

class BelajarUseEffect extends Component {
  // rcon
  // memasang constructor
  constructor(props) {
    super(props)

    this.state = {
      isHide: false,
    }
  }
  render() {
    // deklarasi isHide
    const { isHide } = this.state
    return (
      <div style={{ padding: "30px" }}>
        <h2>Contoh Lifecycle Component & useEffect</h2>
        <hr />
        {/* memasang button untuk menampilkan content dan menyembunyikan content */}
        {/* pada button Ini akan memanggil fungsi setState ketika tombol diklik, yang akan mengubah nilai isHide dalam state. */}
        <button onClick={() => this.setState({ isHide: !isHide })}>
          {/* jika isHide sama dengan true maka button tampilkan, jika false button sembunyikan */}
          {isHide ? "Tampilkan" : "Sembunyikan"}
        </button>
        {/* jika isHide bernilai true maka tampilkan */}
        {/* {!isHide && <LifeCycle />} */}
        {!isHide && <LifeCycleFunc />}
      </div>
    )
  }
}

export default BelajarUseEffect
