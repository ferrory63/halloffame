import React from 'react'
import { createPortal } from 'react-dom'
import { createWrapperAndAppendToBody } from '../../utils/utils'

interface PortalProps {
    children: React.ReactNode
    wrapper: string
}

export const Portal: React.FC<PortalProps> = ({ children, wrapper }) => {
    let element = document.getElementById(wrapper)
    if (!element) {
        element = createWrapperAndAppendToBody(wrapper)
    }

    return createPortal(children, element)
}
