# Learning Vuejs with Laracasts

Link: [https://laracasts.com/series/learn-vue-2-step-by-step/][laracast]

## Getting Started

Install Vue easily by inserting the recommended CDN.

```js
<script src="https://unpkg.com/vue@2.2.1"></script>
```

## Lesson 1

* Create a new Vue instance
* Bind it to an element
* Specify some data
* Bind value to form inputs using `v-model`

#### html

```html
 <div id="root">
    <input type="text" id="input" v-model="message">
    <p>The value of input is {{ message }}</p>
</div>
```

#### js

```js
new Vue({
    el: '#root',
    data: {
        message: "Hello World"
    }
})
```

[laracast]: https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1