
import React, { useMemo } from "react";
import { GearSet, fix6, createSVGgrid } from "@dromney/gear-gen"

function PositionedGearSetViewer({ gearSet, rot, showGrid }: { gearSet: GearSet, rot: number, showGrid?: boolean }) {
    const backgroundGridURL = useMemo(() => {
        if (!showGrid) return undefined
        if (!gearSet.gears.length) return undefined
        const svg = createSVGgrid(gearSet.gears[0].scale)
        const b64 = 'data:image/svg+xml;base64,' + btoa(svg)
        return 'url("' + b64 + '")';
    }, [gearSet, showGrid])

    const size: { h: number, w: number } = useMemo(() => {
        return gearSet.dimensions
    }, [gearSet.gears])
    return (
        <div className="gear-view" style={{
            backgroundImage: backgroundGridURL,
            display: 'flex',
            flexDirection: 'column',
            padding: '12rem',
            flex: '1 1 0%',
        }}>
            <div style={{
                height: size.h + 'px',
                width: size.w + 'px',
                flex: '1 1 0%',
                position: 'relative'
            }}>
                {gearSet.gears.map((gear, i) => {
                    if (!gear) return null
                    return (
                        <div key={i} dangerouslySetInnerHTML={{ __html: gear.svg }} style={{
                            transform: `translate(${gear.svgOffsetX}px,${gear.svgOffsetY}px) rotate(${fix6(gear.getRot(rot) + gear.baseAngle)}deg)`,
                            zIndex: gear.layer,
                            position: 'absolute',
                        }} />
                    )
                })}
            </div>
        </div>
    )
}

export default PositionedGearSetViewer