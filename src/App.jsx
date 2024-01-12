import './App.css'
import NevigationBar from './component/nevigationbar.jsx'
import Header from './component/header.jsx'
import BestSeller from './component/bestSeller.jsx'
import ProductPreview from './component/productPreview.jsx'
import ProductDetails from './component/productDetails.jsx'
import Footer from './component/footer.jsx'
import HelpButton from './component/helpbutton.jsx'

function App() {
  return (
    <>
      <NevigationBar/>
      <Header/>
      <BestSeller/>
      <ProductPreview/>
      <ProductDetails/>
      <Footer/>
      <HelpButton/>
    </>
  )
}

export default App
