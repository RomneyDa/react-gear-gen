import { useEffect, useState } from 'react'

interface MousePosition {
    x: number
    y: number
}

const useMouse = () => {
    const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return mousePos
}

export default useMouse
