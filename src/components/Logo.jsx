import logo from '../assets/img/Logo-GardenTravelHotel-Login.svg'
import logoMobile from '../assets/img/Logo-GardenTravelHotel-horizontal.png'
import { useMediaQuery } from 'react-responsive'
export const Logo = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
    return (
        <img src={isMobile ? logoMobile : logo} alt="Logo" className='img-right' />
    )
};