import React, { useMemo } from "react";
import { GearSet } from "@dromney/gear-gen";
import useMouse from "../hooks/useMouse";
import PositionedGearSetViewer from "./PositionedGearSetViewer";

function MouseGearSetViewer({ gearSet, showGrid, padding = 0 }: { gearSet: GearSet, showGrid?: boolean, padding?: number }) {
    const { x, y } = useMouse()
    const mouseDiag = useMemo(() => Math.sqrt(x * x + y * y), [x, y])
    return (
        <PositionedGearSetViewer gearSet={gearSet} rot={mouseDiag} showGrid={showGrid} padding={padding} />
    )
}

export default MouseGearSetViewer