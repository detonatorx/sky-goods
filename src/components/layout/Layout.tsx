import Navbar from '../navbar/Navbar'
import './Layout.scss'

type Props = {}

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Navbar />

      {children}
    </div>
  )
}

export default Layout
