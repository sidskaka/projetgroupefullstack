import React, { useEffect } from 'react'
import Background from './background'
import Tendance from './tendance'
import Details from './details'
import Newsletter from '../newsletter'

const Accueil = () => {

    return(
        <>
            <Background />
            <Tendance />
            <Newsletter />
            <Details />
        </>
    )
}

export default Accueil
