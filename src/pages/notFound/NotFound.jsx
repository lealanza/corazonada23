import './notFound.css'
import error1 from '../../images/notfound/error1.png'

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={error1} alt="error 404" />
      <h2>The page you requested could not be found</h2>
    </div>

  )
}

export default NotFound