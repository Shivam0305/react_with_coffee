import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[numAllow, setnumAllow] = useState(false)
  const[charAllow, setcharAllow] = useState(false)
  const[Password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) {
      str += "0123456789"
    }
    if (charAllow) {
      str += "@#$%^&*`()-_+={}|~/\<>,.;:?!"
    }

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }

    setPassword(pass)


   }, [length, numAllow, charAllow, setPassword])

   const copyPasswordToClipboard = useCallback( () => {
    passwordRef.current?.select();
    passwordRef.current?setSelectionRange(0, 999):
    window.navigator.clipboard.writeText(Password)
   },
  [Password])

   useEffect( () =>{
    PasswordGenerator()
   }, [length, numAllow, charAllow, setPassword])

  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-500'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly 
          ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer' 
          onChange={(e) =>{setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numAllow}
          id='numberInput'
          onChange={() => {
            setnumAllow( (prev) => !prev)
          }}
           />
           <label htmlFor="numberInput">Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllow}
          id='char Input'
          onChange={() => {
            setnumAllow( (prev) => !prev)
          }}
           />
           <label htmlFor="numberInput">Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
