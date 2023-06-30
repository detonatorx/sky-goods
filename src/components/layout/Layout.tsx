import Navbar from '../navbar/Navbar'
import './Layout.scss'

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />

      {children}
    </div>
  )
}

export default Layout
