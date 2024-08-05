import React from 'react'
import ReactDOM from 'react-dom/client'

function MyApp() {
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://gppgle.com',
//       target: '_blank'

//   },
//   children: 'Click to visit google'
// }

const anotherElement =(
  <a href="https://google.com" target='_blank'>Visit Google</a>

)
const anotheruser = "chai aur react"

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).
render(

  ReactElement 
  
  // <App />
  
)
