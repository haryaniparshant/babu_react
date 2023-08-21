
import React from "react"
const Search =  ({message,setmessage}) =>{

    console.log("In Search")
    return (<>
    <input
        type="text"
        id="message"
        name="message"
        onChange= {(e) => {
            console.log(e)
            setmessage(e.target.value)
        }}
        value={message}
      />
      </>
      )
}

export default Search