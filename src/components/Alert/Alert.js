import React from 'react'
import { render } from 'react-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

export function Alert(props) {

    const options = {
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        transition: transitions.SCALE
    }

    return (
        <AlertProvider template={AlertTemplate} {...options}></AlertProvider>
    )
}

