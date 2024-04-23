import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2022</h4>
      {/* <a href="/about">About</a> */}
      <Link to="/about">About</Link>
    </footer>
  )
}

export default Footer
