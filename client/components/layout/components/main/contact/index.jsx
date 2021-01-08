import React from 'react'
import MiniMenu from './minimenu'
import Map from './map'
import ContactForm from './contactform'
import Newsletter from '../newsletter'

const Contact = () => {
    return(
        <>
            <MiniMenu />
            <ContactForm />
            <Newsletter />
        </>
    )
}

export default Contact