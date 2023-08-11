import React, { useEffect, useState } from 'react';
import { SimpleSpinner } from '../components';
import { ExampleGears, GearSet } from '@dromney/gear-gen';

function ExampleSpinners() {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(ExampleGears()))
    }, [])
    if (!gearSet) return null
    return (
        <div>
            <SimpleSpinner gear={gearSet.gears.find(g => g.internal)} rpm={3} />
            <SimpleSpinner gear={gearSet.gears[2]} rpm={8} />
        </div>
    )
}

export default ExampleSpinners