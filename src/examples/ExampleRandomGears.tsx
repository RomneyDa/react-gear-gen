import React, { useEffect, useState } from 'react';
import { PositionedGearSetViewer } from '../components';
import { GearSet, RandomBackAndForth } from '@dromney/gear-gen';
import '@dromney/gear-gen/dist/styles/bluey.css'
import '../styles/examples.css'

function ExampleRandomGears() {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(RandomBackAndForth(10)))
    }, [])
    if (!gearSet) return null
    return (
        <PositionedGearSetViewer gearSet={gearSet} rot={0} showGrid={false} />
    )
}

export default ExampleRandomGears;
