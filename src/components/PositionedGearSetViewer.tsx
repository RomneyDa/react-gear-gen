
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
        <div className="gear-view flex flex-1 p-12" style={{
            backgroundImage: backgroundGridURL,
        }}>
            <div className="flex-1 relative" style={{
                height: size.h + 'px',
                width: size.w + 'px',
            }}>
                {gearSet.gears.map((gear, i) => {
                    if (!gear) return null
                    return (
                        <div key={i} className="absolute" dangerouslySetInnerHTML={{ __html: gear.svg }} style={{
                            transform: `translate(${gear.svgOffsetX}px,${gear.svgOffsetY}px) rotate(${fix6(gear.getRot(rot) + gear.baseAngle)}deg)`,
                            zIndex: gear.layer
                        }} />
                    )
                })}
            </div>
        </div>
    )
}

export default PositionedGearSetViewer