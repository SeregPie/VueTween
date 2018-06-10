# VueTween

Allows components to tween their properties.

## demo

[Try it out!](https://seregpie.github.io/VueTween/)

## dependencies

- [Vue](https://github.com/vuejs/vue)

## setup

### npm

```shell
npm install @seregpie/vuetween
```

### ES module

Install the plugin globally.

```javascript
import Vue from 'vue';
import VueTween from '@seregpie/vuetween';

Vue.use(VueTween);
```

*or*

Register the plugin in the scope of another instance.

```javascript
import VueTween from '@seregpie/vuetween';

export default {
  // ...
  mixins: [VueTween],
};
```

```

### browser

```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/@seregpie/vuetween"></script>
```

If Vue is detected, the plugin will be installed automatically.

## usage

```javascript
{
  props: {
    number: Number,
    animationDuration: Number,
  },
  tweened: {
    animatedNumber: {
      get() {
        return this.number;
      },
      duration() {
        return this.animationDuration;
      },
    },
  },
}
```

---

Use nested objects and arrays.

```javascript
{
  data: {
    colors: [
      {r: 255, g: 0, b: 0},
      {r: 0, g: 255, b: 0},
      {r: 0, g: 0, b: 255},
    ],
  },
  tweened: {
    animatedColors: {
      get() {
        return this.colors;
      },
      duration: 1000,
    },
  },
}
```
