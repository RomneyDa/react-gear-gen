import React, { useEffect, useState } from 'react';
import { ExampleGears, GearSet } from '@dromney/gear-gen';
import '../styles/examples.css'
import SpinningOrMouseGearSetViewer from '../components/SpinningOrMouseGearSetViewer';

function ExampleGearSet({ isMobile = false }: { isMobile?: boolean }) {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(ExampleGears()))
    }, [])
    if (!gearSet) return null
    return (
        <div>
            <SpinningOrMouseGearSetViewer spin={isMobile} gearSet={gearSet} showGrid={true} padding={3} rpm={20} />
            <div className="gear-example-download-buttons">
                <button className="gear-example-download-button" onClick={() => { gearSet.downloadAllSVGs(50) }}>Download all</button>
                <button className="gear-example-download-button" onClick={() => { gearSet.gears[0].downloadSVG() }}>Download first</button>
                <button className="gear-example-download-button" onClick={() => { gearSet.gears[0].downloadDXF() }}>Download dxf</button>
            </div>
        </div>
    )
}

export default ExampleGearSet