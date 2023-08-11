import React, { useEffect, useState } from 'react';
import { ExampleGears, GearSet } from '@dromney/gear-gen';
import ExampleGearSet from './ExampleGearSet';
import ExampleRandomGears from './ExampleRandomGears';
import ExampleSpinners from './ExampleSpinners';
import '../styles/examples.css'

function ExamplePage() {
  const [gearSet1, setGearSet1] = useState<GearSet>()
  useEffect(() => {
    setGearSet1(new GearSet(ExampleGears()))
  }, [])
  if (!gearSet1) return null
  return (
    <div className="gear-example-main">
      <ExampleGearSet />
      <ExampleSpinners />
      <ExampleRandomGears />
    </div>
  )
}

export default ExamplePage;
