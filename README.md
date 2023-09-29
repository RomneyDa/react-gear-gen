# @dromney/react-gear-gen
A typescript npm package that provides components and hooks for using the [@dromney/gear-gen](https://github.com/romneyda/gear-gen) package to generate, display, and animate gears and gear patterns in React.

## Installation
### `npm install @dromney/react-gear-gen`

## What it does
This package contains several components that can be used to display a single `Gear` or `Gearset`, along with useful hooks.

See [@dromney/gear-gen](github.com/romneyda/gear-gen) ReadMe for more specific `Gear`, `Gearset`, generators, and styles usage

## Examples
Example components that use one of the below components to display a Gear or Gearset imported from the @dromney/gear-gen examples/generators can be found in [src/examples](https://github.com/RomneyDa/react-gear-gen/tree/main/src/examples)

The repo [@dromney/react-gear-gen-example](github.com/romneyda/react-gear-gen-example) is a live-hosted example of this package

### SimpleSpinner
The `SimpleSpinner` component takes a `gear` and `rpm` as props and displays the gear spinning at that rpm.

```typescript
import React, { useEffect, useState } from 'react';
import { SimpleSpinner } from '@dromney/react-gear-gen';
import { ExampleGears } from '@dromney/gear-gen';

export default function ExampleSimpleSpinner() {
    return <SimpleSpinner gear={ExampleGears[2]} rpm={8} />
}
```

### PositionedGearSetViewer
The `PositionedGearSetViewer` component takes the following props:
- `gearSet` (required): `GearSet`
- `rot` (optional, default `0`): number used to animate the `GearSet` or give a fixed angle of rotation of the parent gear. Degrees
- `showGrid` (optional, default `false`): boolean - if true, displays a grid in the background
- `padding` (optional default `0`): number that adds visual padding to the `GearSet` display. Pixels

The following example uses an example randomly generated gearset:
```typescript
import React, { useEffect, useState } from 'react';
import { PositionedGearSetViewer } from '@dromney/react-gear-gen';
import { GearSet, RandomBackAndForth } from '@dromney/gear-gen';

export default function ExamplePositionedGearSetViewer() {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(RandomBackAndForth(10)))
    }, [])
    if (!gearSet) return null
    return <PositionedGearSetViewer gearSet={gearSet} rot={0} showGrid={false} padding={10} />
}
```

### SpinningGearSetViewer
The `SpinningGearSetViewer` component is a wrapper around the `PositionedGearSetViewer` that takes a speed and optional update frequency. Instead of `rot`, it takes:
- `rpm` (required): the speed in RPM at which to rotate the parent gear
- `fps` (optional, default 60): visual update frequency in Hz
and generates `rot`. It accepts `gearSet`, `showGrid`, and `padding` as described for the `PositionedGearSetViewer`.

The following example uses the `ExampleGears` from `@dromney/gear-gen`:
```typescript
import React, { useEffect, useState } from 'react';
import { ExampleGears, GearSet } from '@dromney/gear-gen';
import SpinningGearSetViewer from '@dromney/react-gear-gen';

function ExampleSpinningGearSet({ spin = false }: { spin?: boolean }) {
    const [gearSet, setGearSet] = useState<GearSet>()
    useEffect(() => {
        setGearSet(new GearSet(ExampleGears()))
    }, [])
    if (!gearSet) return null
    return <SpinningGearSetViewer gearSet={gearSet} showGrid={true} padding={3} rpm={20} />
}
```

### MouseGearSetViewer
The `MouseGearSetViewer` component is another wrapper around the `PositionedGearSetViewer` that animates gears using movement of the mouse. So it accepts `gearSet`, `showGrid`, and `padding` as described for the `PositionedGearSetViewer`, but does NOT take the `rot` prop. The mouse movement hook is included in the library.

Example
```typescript
// ...(otherwise similar to above SpinningGearSetViewer)
    return <MouseGearSetViewer gearSet={gearSet} showGrid={false} />
```

### SpinningOrMouseGearSetViewer
The `SpinningOrMouseGearSetViewer` component is a wrapper around both the `MouseGearSetViewer` and `SpinningGearSetViewer` components that also accepts a `spin` prop. If `spin` is true, it displays the `SpinningGearSetViewer`, otherwise, it returns the `MouseGearSetViewer`. This is specifically useful for displaying a spinner on mobile devices and a more responsive mouse viewer on devices with a mouse.
```typescript
// ...(otherwise similar to above SpinningGearSetViewer)
    return <SpinningOrMouseGearSetViewer spin={spin} gearSet={gearSet} showGrid={true} padding={3} rpm={20} />


```





