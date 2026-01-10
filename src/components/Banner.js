import '../styles/Banner.css';
import logo from '../assets/logo.png'
import Recommendation from './Recommendation';

function Banner() {
    const title = 'La maison jungle';
    return (
    <div className='lmj-banner'>
        <div className='lmj-banner-logo'>
            <img src={logo} alt='La maison jungle logo' className='lmj-banner-logo-image'/>
        </div>
        <h1 className='lmj-banner-title'>{title}</h1>
        <Recommendation />
    </div>
    )
}

export default Banner;