import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import Counter from 'components/Counter'


//Counter Js↓
// const Counter = (props) => {
//  const [count, setCount] = useState(props.count)

//  const countUp = () => setCount(c => c +1)

//     return(
//         <div>
//              <p>Count: {count}</p>
//             {/* <button onClick = {() =>{
//                 setCount (count + 1)
//             }}> Count Up </button> */}

//             <button onClick={countUp}>Count Up</button>

//             </div>
//     )
// }

const Welcome = (props) => {
    return(
        <div>
            <h1>Welcome from React</h1>
            <Counter count={5}/>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Welcome />,
      document.getElementById('welcome'),
    )
  })