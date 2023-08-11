import React from "react"
import { Gear } from "@dromney/gear-gen"
import "./spin.css"

function SimpleSpinner({ gear, rpm }: { gear?: Gear, rpm: number }) {
    if (!gear) return null
    const animationName = rpm > 0 ? 'spin' : 'spin-reverse'
    const animationDuration = 60 / rpm / Math.abs(gear.totalRatio) + 's'
    return (
        <div dangerouslySetInnerHTML={{ __html: gear.svg }} style={{
            animationName,
            animationDuration,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            width: gear.size,
            height: gear.size
        }} />
    )
}

export default SimpleSpinner