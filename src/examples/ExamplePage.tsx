import React from 'react';
import ExampleGearSet from './ExampleGearSet';
import ExampleRandomGears from './ExampleRandomGears';
import ExampleSpinners from './ExampleSpinners';
import '../styles/examples.css'
import '@dromney/gear-gen/dist/styles/dark.css'

function ExamplePage({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div className="gear-example-main">
      <ExampleGearSet spin={isMobile} />
      <ExampleSpinners />
      <ExampleRandomGears />
    </div>
  )
}

export default ExamplePage;
