# Learning Vuejs with Laracasts

Link: [https://laracasts.com/series/learn-vue-2-step-by-step/][laracast]

## Getting Started

Install Vue easily by inserting the recommended CDN.

```js
<script src="https://unpkg.com/vue@2.2.1"></script>
```

## Lesson 1: Basic Data Binding

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

## Lesson 2: Setup Vue Dev Tools

Install the [Vue Dev Tools][vue-dev-gh] from [Chrome Web Store][chrome-vue].

## Lesson 3: Lists

This example explains how you may loop over array objects using Vue.

Our goal is to loop over a names array in an unordered list. We start by adding the array `names` to `data:`.

#### js

```js
new Vue ({
            el: '#root',
            data: {
                names: ['Frank', 'Kay', 'Romeo', 'Caleb', 'Carlos']
            }
        })
```

In our markup, we use the the `v-for` to loop over our names.

#### html

```html
<div id="root">
    <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
    </ul>
    </div>
```

or we could also use `v-text` to simplify our code.

```html
<li v-for="name in names" v-text="name">
```

## Lesson 4: Event Listeners

Event Listeners can easily be added by using `v-on:click`. We can fire a method `addName`by including it in after the listener like this `v-on:click="addName"`.

#### html

```html
<div id="root">
    <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
    </ul>

    <input id="input" type="text" v-model="newName">
    <button v-on:click="addName">Add Name</button>
</div>
```

We add any custom methods in Vue by adding them to the `methods` object.
Below we are accessing the value typed into the input via the `v-model="newName"` and adding it to the `names` array. Next we clear the content of the input by reseting `newName` to an empty string.

#### js

```js
var app = new Vue ({
    el: '#root',
    data: {
        newName: '',
        names: ['Frank', 'Kay', 'Romeo', 'Caleb', 'Carlos']
    },
    methods: {
        addName() {
            this.names.push(this.newName)
            this.newName = ''
        }
    }

    })
```

#### Shorthand

We will be doing a lot of event listeners so we can do the shorthand of `v-on:click` like this.

`<button @click="addName">Add Name</button>`

## Lesson 5: Attribute and Class Binding

## Lesson 6: Computed Properties

## Lesson 7: Components 101


[laracast]: https://laracasts.com/series/learn-vue-2-step-by-step/
[chrome-vue]:https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd
[vue-dev-gh]: https://github.com/vuejs/vue-devtools