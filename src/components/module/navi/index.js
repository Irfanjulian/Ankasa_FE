import React from 'react'
import Button from '../../base/buttonv2'
import Logo from '../logo'
import Searchbar from '../searchbar'

import styles from './navi.module.css'

const Navi = ({ className }) => {
  return (
    <div className={className}>
    <div className={styles.navi}>
        <Logo />

        <Searchbar />

        <div className={styles['btn-group']}>
            <Button 
            title='Find Ticket'
            type='button'
            className={styles['navi-btn']}
            // onClick={handleLogin}
            />
            
            <Button 
            title='My Booking'
            type='button'
            className={styles['navi-btn']}
            // onClick={handleLogin}
            />
        </div>

        <Button 
        title='Sign Up'
        type='button'
        className={styles['sign-btn']}
        // onClick={handleLogin}
        />
    </div>
    </div>
  )
}

export default Navi