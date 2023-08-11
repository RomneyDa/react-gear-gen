import React, { useEffect, useState } from 'react';
import { MouseGearSetViewer } from '../components';
import { ExampleGears, GearSet } from '@dromney/gear-gen';
import '@dromney/gear-gen/dist/styles/dark.css'
import '../styles/examples.css'

function ExampleGearSet() {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(ExampleGears()))
    }, [])
    if (!gearSet) return null
    return (
        <div>
            <MouseGearSetViewer gearSet={gearSet} showGrid={true} />
            <div className="gear-example-download-buttons">
                <button className="gear-example-download-button" onClick={() => { gearSet.downloadAllSVGs(50) }}>Download all</button>
                <button className="gear-example-download-button" onClick={() => { gearSet.gears[0].downloadSVG() }}>Download first</button>
                <button className="gear-example-download-button" onClick={() => { gearSet.gears[0].downloadDXF() }}>Download dxf</button>
            </div>
        </div>
    )
}

export default ExampleGearSet