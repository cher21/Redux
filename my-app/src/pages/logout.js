/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Header from './header'
import { useDispatch, useSelector } from 'react-redux'
import { doGetLogoutResponse } from '../redux/action/actionLogin'
import { useNavigate } from 'react-router-dom'


const Logout = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false)

    // // eslint-disable-next-line react-hooks/rules-of-hooks
    const { login, message, refresh, error } = useSelector(state => state.loginReducers)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    dispatch(doGetLogoutResponse())
    navigate('/login')

    return (
        <div>
            <Header title='Logout' onClick={() => setIsOpen(true)}>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h2 className="sr-only">Logout</h2>

                    </div>
                </div>
            </Header>

        </div>
    )
}

export default Logout