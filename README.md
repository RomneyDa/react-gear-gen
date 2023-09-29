# @dromney/react-gear-gen
A typescript npm package that provides components and hooks for using the [@dromney/gear-gen](https://github.com/romneyda/gear-gen) package to generate, display, and animate gears and gear patterns in React.

## Installation
### `npm install @dromney/react-gear-gen`

## How it works
This package contains several components that can be used to display a single Gear or Gearset, along with useful hooks.

See [@dromney/gear-gen](github.com/romneyda/gear-gen) readme for more specific `Gear`, `Gearset`, generators, and styles usage

Example components that use one of the below components to display a Gear or Gearset imported from the @dromney/gear-gen examples/generators can be found in [src/examples](https://github.com/RomneyDa/react-gear-gen/tree/main/src/examples)

### SimpleSpinner
The `SimpleSpinner` component takes a `gear` and `rpm` as props and displays the gear spinning at that rpm.

```typescript
import React, { useEffect, useState } from 'react';
import { SimpleSpinner } from '../components';
import { ExampleGears } from '@dromney/gear-gen';

export default function ExampleSpinner() {
    return <SimpleSpinner gear={ExampleGears[2]} rpm={8} />
}
```

### PositionedGearSetViewer
The `PositionedGearSetViewer` component takes the following props:
- gearSet (required): `GearSet`
- rot (optional, default `0`): number used to animate the `GearSet` or give a fixed angle of rotation of the parent gear. Degrees
- showGrid (optional, default `false`): boolean - if true, displays a grid in the background
- padding (optional default `0`): number that adds visual padding to the `GearSet` display. Pixels

### SpinningGearSetViewer
The `SpinningGearSetViewer` component is a wrapper around the `PositionedGearSetViewer` that takes a speed and optional update frequency. Instead of `rot`, it takes:
- rpm (required): the speed in RPM at which to rotate the parent gear
- fps (optional, default 60): visual update frequency in Hz
and generates `rot`. It accepts `gearSet`, `showGrid`, and `padding` as described for the `PositionedGearSetViewer`.

### MouseGearSetViewer


### SpinningOrMouseGearSetViewer


## Examples



```

```


