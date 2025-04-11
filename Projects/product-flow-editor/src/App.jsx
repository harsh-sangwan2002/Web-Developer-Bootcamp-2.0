import Products from "./components/Products"
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
      <h1 className="text-4xl text-center m-5">Product Flow Editor</h1>
      <Products />
    </div>
  )
}

export default App
