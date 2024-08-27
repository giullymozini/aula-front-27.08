import { Link } from 'react-router-dom'
import { NavStyle } from '../css/NavStyle'

const Nav = () => {

    return (
        <>
            <NavStyle>

                <section className='nav'>

                    <Link to='/'>HOME</Link>
              
                </section>

            </NavStyle>
        </>
    )
}
export default Nav