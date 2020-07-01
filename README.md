# VueTween

Allows the components to tween their properties.

## demo

[Try it out!](https://seregpie.github.io/VueTween/)

## setup

### npm

```shell
npm i @seregpie/vue-tween
```

### ES module

```javascript
import {tweened} from '@seregpie/vue-tween';
```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/vue-tween"></script>
```

The plugin is globally available as `VueTween`.

## usage

```javascript
import {ref} from 'vue';
import {tweened} from '@seregpie/vue-tween';

export default {
  props: {
    number: Number,
  },
  setup(props) {
    let animationDuration = ref(1000);
    let animatedNumber = tweened(
      () => props.number,
      animationDuration,
      {
        easing: (t => t * (2 - t)),
      },
    );
    return {
      animationDuration,
      animatedNumber,
    };
  },
};
```
---

Use nested objects and arrays.

```javascript
import {ref} from 'vue';
import {tweened} from '@seregpie/vue-tween';

export default {
  setup() {
    let colors = ref([
      {r: 255, g: 0, b: 0},
      {r: 0, g: 255, b: 0},
      {r: 0, g: 0, b: 255},
    ]);
    let animatedColors = tweened(colors, 1000);
    return {
      colors,
      animatedColors,
    };
  },
};
```

## API

### stored

```
tweened(value, duration, {
  easing(n) { /* identity */ },
})
```

Creates a reference to an animated value.

| argument | description |
| ---: | :--- |
| `value` | Anything  string as the key. Use a reference or a function to allow reactivity. |
| `duration` | A number as the duration of the animation in milliseconds. Use `Boolean`, `Number` or `String` for a predefined functionality. |
| `easing` | Anything as the default value that is returned if the key does not exist. Use a reference or a function to allow reactivity. |

Returns the created reference.
