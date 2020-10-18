# VueTween

Allows the components to tween their properties.

Works for Vue 2 & 3.

## demo

[Try it out!](https://seregpie.github.io/VueTween/)

## dependencies

- [Vue Demi](https://github.com/antfu/vue-demi)

## setup

### npm

```shell
npm i @seregpie/vue-tween
```

---

```javascript
import VueTween, {tweened} from '@seregpie/vue-tween';
```

### browser

```html
<!-- if using Vue 2 -->
<script src="https://unpkg.com/vue@2"></script>
<script src="https://unpkg.com/@vue/composition-api"></script>

<!-- if using Vue 3 -->
<script src="https://unpkg.com/vue@3"></script>

<script src="https://unpkg.com/vue-demi"></script>
<script src="https://unpkg.com/@seregpie/vue-tween"></script>
```

The plugin is globally available as `VueTween`.

## usage

### Composition API

```javascript
import {ref} from 'vue';
import {tweened} from '@seregpie/vue-tween';

export default {
  props: {
    count: Number,
  },
  setup(props) {
    let animationDuration = ref(1000);
    let animatedCount = tweened(
      () => props.count,
      animationDuration,
      {
        easing: (t => t * (2 - t)),
      },
    );
    return {
      animatedCount,
      animationDuration,
    };
  },
};
```

### Options API

Install the plugin.

```javascript
import {createApp} from 'vue'
import VueTween from '@seregpie/vue-tween';

let app = createApp({/*...*/});
app.use(VueTween);
app.mount('body');
```

---

Define the options.

```javascript
export default {
  props: {
    count: Number,
  },
  data() {
    return {
      animationDuration: 1000,
    },
  },
  tweened: {
    animatedCount: {
      get() {
        return this.count;
      },
      duration() {
        return this.animationDuration;
      },
      easing: (t => t * (2 - t)),
    },
  },
};
```

## API

### stored

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

## API

### tweened

```
tweened(value, duration, {
  easing(t) { /* identity */ },
})
```

Creates a reference to an animated value.

| argument | description |
| ---: | :--- |
| `value` | Anything  string as the key. Use a reference or a function to allow reactivity. |
| `duration` | A number as the duration of the animation in milliseconds. A watcher data source can either be a getter function that returns a value, or directly a ref |
| `easing` |  |

Returns the created reference.

---

```javascript
let number = ref(0);
let animatedNumber = tweened(number, 1000);
setTimeout(() => {
  number.value = 42;
}, 100);
```

---

Use nested objects and arrays.

```javascript
let colors = reactive([
  {r: 255, g: 0, b: 0},
  {r: 0, g: 255, b: 0},
  {r: 0, g: 0, b: 255},
]);
let animatedColors = tweened(colors, 1000);
setTimeout(() => {
  colors[0].r = 0;
  colors[1].g = 0;
  colors[2].b = 0;
}, 100);
```