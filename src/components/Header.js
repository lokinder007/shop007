import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars, FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
    // const navigate = useNavigate()

    const { cartItems } = useSelector(state => state.cartReducer)
    const {user} = JSON.parse(localStorage.getItem('currentUser'))

    const logout = () => {
        // localStorage.removeItem('currentUser')
        // navigate('/login')
        // window.location.reload();
        localStorage.clear();
    }

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Shop007
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"><FaBars size={25} color='white' /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                    {user.email.substring(0 , user.email.length-10)}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                    <FaCartPlus/> ( {cartItems.length} )
                                    {/* Cart */}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={logout}>
                                    Logout
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
