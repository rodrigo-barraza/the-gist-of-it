import { useEffect } from 'react'
import './Layout.module.scss'

function Layout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
    })

    return (
        <>
        {children}
        </>
    )
}

export default Layout