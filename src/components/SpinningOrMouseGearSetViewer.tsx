import React from "react";
import { GearSet } from "@dromney/gear-gen";
import SpinningGearViewer from "./SpinningGearSetViewer";
import MouseGearSetViewer from "./MouseGearSetViewer";

function SpinningOrMouseGearSetViewer({ gearSet, spin = true, rpm = 20, padding = 0, showGrid = false }: { gearSet: GearSet, spin?: boolean, rpm?: number, padding?: number, showGrid?: boolean }) {
    return spin ?
        <SpinningGearViewer gearSet={gearSet} showGrid={showGrid} padding={padding} rpm={rpm} /> :
        <MouseGearSetViewer gearSet={gearSet} showGrid={showGrid} padding={padding} />
}

export default SpinningOrMouseGearSetViewer