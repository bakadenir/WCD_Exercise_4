import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import HomePage from "./pages/HomePage"
import Content from "./pages/Content"

function App() {

  return <div>

    {/* Navbar */}
    <Navbar />

    {/* Content */}
    <HomePage />
    <Content />

    {/* Footer */}
    <Footer />


  </div>
}

export default App
