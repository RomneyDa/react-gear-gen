import React, { useEffect, useState } from "react";
import PositionedGearSetViewer from "./PositionedGearSetViewer";
import { GearSet } from "@dromney/gear-gen";

export function SpinningGearViewer({ rpm, fps = 60, gearSet, showGrid, padding }: { rpm: number, fps?: number, gearSet: GearSet, showGrid?: boolean, padding?: number }) {
    // res is the number of ms per update. Defaults to 
    const [anim, setAnim] = useState<number>(0)
    const [ms, setMs] = useState<number>(0)
    useEffect(() => {
        setMs(1000 / fps)
    }, [fps])
    useEffect(() => {
        const interval = setInterval(() => {
            setAnim((anim) => anim + 0.006 * rpm * ms) // 360 * rpm / 60 * res / 1000
        }, ms)
        return () => clearInterval(interval)
    }, [ms])
    return (
        <PositionedGearSetViewer gearSet={gearSet} rot={anim} showGrid={showGrid} padding={padding} />
    )
}