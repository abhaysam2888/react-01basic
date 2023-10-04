import Chai from "./Chai"
// uppercase the imported, exported and function name
function App() { 
  const username = 'chai aur code'
  return (
    <>
    <Chai />
    <h1>Hello i am {username}</h1>
    <p>para</p>
    </>
  )
}

// use variable in react {}
// <> is fragment
export default App
