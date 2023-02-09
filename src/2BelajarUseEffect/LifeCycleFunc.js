// rfce
import React, { useEffect, useState } from "react"

function LifeCycleFunc() {
  // membuat state
  const [name, setName] = useState("")
  //   const [isUpdate, setUpdate] = useState("")

  //   membuat componentDidMount menggunakan useEffect
  useEffect(() => {
    // get api dari fake api: jsonplaceholeder
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        // console.log("component did mount")
        setName(json.name)
      })
  }, [])

  return (
    <div>
      {/* tampilkan satu data nama */}
      <h3>Name :{name}</h3>
    </div>
  )
}

export default LifeCycleFunc
