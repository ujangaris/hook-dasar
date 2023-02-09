// rfce
import React, { useEffect, useState } from "react"

function LifeCycleFunc() {
  // membuat state
  const [name, setName] = useState("")
  const [isUpdate, setUpdate] = useState("")

  //   membuat componentDidMount menggunakan useEffect
  useEffect(() => {
    // get api dari fake api: jsonplaceholeder
    fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((response) => response.json())
      .then((json) => {
        // console.log("component did mount")
        setName(json.name)
      })
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault()
    // jalankan api update
    fetch("https://jsonplaceholder.typicode.com/users/3", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: name,
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
        setUpdate(true)
      })
  }
  //  component did update
  useEffect(() => {
    if (isUpdate) {
      alert("Nama Sukses di update")
      setUpdate(false)
    }
  }, [isUpdate])
  // component will unmount
  useEffect(() => {
    return () => {
      console.log("component di copot")
    }
  }, [])

  return (
    <div>
      {/* tampilkan satu data nama */}
      <h3>Name :{name}</h3>
      <hr />
      <h3>Update Name </h3>

      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type={"text"}
          placeholder={"Change Name"}
          name={"name"}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LifeCycleFunc
