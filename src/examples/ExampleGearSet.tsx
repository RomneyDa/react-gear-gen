import React, { useEffect, useState } from 'react';
import { MouseGearSetViewer } from '../components';
import { ExampleGears, GearSet } from '@dromney/gear-gen';
import '../styles/examples.css'
import { SpinningGearViewer } from '../components/SpinningGearSetViewer';
import { isMobile } from 'react-device-detect';

function ExampleGearSet() {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(ExampleGears()))
    }, [])
    if (!gearSet) return null
    return (
        <div>
            {isMobile ? <SpinningGearViewer gearSet={gearSet} showGrid={true} padding={3} rpm={20} /> :
                <MouseGearSetViewer gearSet={gearSet} showGrid={true} padding={3} />}
            <div className="gear-example-download-buttons">
                <button className="gear-example-download-button" onClick={() => { gearSet.downloadAllSVGs(50) }}>Download all</button>
                <button className="gear-example-download-button" onClick={() => { gearSet.gears[0].downloadSVG() }}>Download first</button>
                <button className="gear-example-download-button" onClick={() => { gearSet.gears[0].downloadDXF() }}>Download dxf</button>
            </div>
        </div>
    )
}

export default ExampleGearSet