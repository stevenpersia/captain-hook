<h1 align="center">Captain hook</h1>
<p align="center"><img alt="captain hook" src="./captain-hook.gif" width="300"/></p>

## Overview

Here a modest list of hooks that I use every day. I will add more next few days, keep watching. And if you have some good hooks I would love to add them. So feel free to open a pull request.

## Hooks

### `useFetch` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useFetch.js)

Useful hook if you want to fetch data from a url.

#### How to use

Import hook :

```js
import useFetch from "hooks/useFetch";
```

Then use like this :

```js
const { response, errors } = useFetch("https://github.com/stevenpersia/");
```

#### Demo

SOON...

---

### `useFullscreen` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useFullscreen.js)

Useful hook if you want to fullscreen an element of your page.

#### How to use

Import hook :

```js
import useFullscreen from "hooks/useFullscreen";
```

Add :

```js
const { elementFS, triggerFS, exitFS, isFS } = useFullscreen();
```

Then use like this :

```html
<div ref="{elementFS}">I want to fullscreen this div.</div>
<button onClick="{triggerFS}">Trigger fullscreen</button>
<button onClick="{exitFS}">Exit fullscreen</button>
```

Check if fullscreen is triggered :

```js
console.log(isFS);
```

#### Demo

SOON...

---

### `useHover` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useHover.js)

Useful hook if you want to detect when the mouse is hovering an element.

#### How to use

Import hook :

```js
import useHover from "hooks/useHover";
```

Add :

```js
const [hoverRef, isHovered] = useHover();
```

Then use like this :

```html
<div ref="{hoverRef}">{isHovered ? "Hovered !" : "Hover me !"}</div>
```

#### Demo

SOON...

---

### `useKeyPress` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useKeyPress.js)

Useful hook if you want to detect when user is pressing a specific key.

#### How to use

Import hook :

```js
import useKeyPress from "hooks/useKeyPress";
```

Then use like this :

```js
const hKeyPressed = useKeyPress("h");

console.log(hKeyPressed & "Hello !");
// → Hello !
```

#### Demo

SOON...

---

### `useSlug` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useSlug.js)

Useful hook if you want to slug content for urls.

#### How to use

Import hook :

```js
import useSlug from "hooks/useSlug";
```

Then use like this :

```js
useSlug("Omégà! Pèlô Fùll");
// → omega-pelo-full
```

#### Demo

SOON...

---

### `useSwap` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useSwap.js)

Useful hook if you want to swap the keys and values of a given object.

#### How to use

Import hook :

```js
import useSwap from "hooks/useSwap";
```

Then use like this :

```js
useSwap({ name: "A", init: "bootstrap" });
// → {A: "name", bootstrap: "init"}
```

#### Demo

SOON...

---

### `useTitle` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useTitle.js)

Useful hook if you want to set a specific title to page.

#### How to use

Import hook :

```js
import useTitle from "hooks/useTitle";
```

Then use like this :

```js
useTitle("My title");
```

#### Demo

SOON...

---

### `useToggle` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useToggle.js)

Useful hook if you want display/hide something with toggle.

#### How to use

Import hook :

```js
import useToggle from "hooks/useToggle";
```

Then use like this :

```
const [open, toggle] = useToggle(false);

<Button onClick={toggle}>Show filters</Button>;
{open && <Filters />}
```

#### Demo

SOON...

### `useEventListener` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useEventListener.js)

Useful hook if you want to create an event handler. 

#### How to use

Import hook :

```js
import { useEventListener } from "hooks/useEventListener";
```

Then use like this :

```js
useEventListener('DOMContentLoaded', event => {
   console.log('DOM fully loaded and parsed');
});
```

#### Demo

SOON...

---

### `useFocusOutside` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useFocusOutside.js)

Useful hook if you want some element to close or hide when it lost focus 
from the user.

#### How to use

Import hook :

```js
import { useFocusOutside } from "hooks/useFocusOutside";
```

Then use like this :

```js
const ref = useRef(null);

const closeOrHide = () => {
  // some code to close or hide your element.
}

useFocusOutside(ref, closeOrHide);
```

> Note: you need to pass **ref** into the element that should be focussed 
outside of.

#### Demo

SOON...

---

<<<<<<< HEAD
=======

>>>>>>> dd32c7e96d319fa35d402fca4af52a75cee9806b
### `useInfiniteScroll` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useInfiniteScroll.js)

Useful hook if you want to add the infinite scroll feature to your website.

#### How to use

Import hook :

```js
<<<<<<< HEAD
=======

>>>>>>> dd32c7e96d319fa35d402fca4af52a75cee9806b
import useInfiniteScroll from "hooks/useInfiniteScroll";

```

Then use like this :

```js
<<<<<<< HEAD
=======

>>>>>>> dd32c7e96d319fa35d402fca4af52a75cee9806b
const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);

function fetchMoreListItems() {
  // Some code for adding content to each user is at the bottom of the page
}
```

#### Demo

SOON...

---
### `useMeta` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useMeta.js)

<<<<<<< HEAD
Useful hook if you want to set a meta tags to the page.
#### How to use
=======
### `useMeta` - [View code](https://github.com/stevenpersia/captain-hook/blob/master/useMeta.js)

Useful hook if you want to set a meta tags to the page.

#### How to use

>>>>>>> dd32c7e96d319fa35d402fca4af52a75cee9806b
Import hook :

```js
import useMeta from "hooks/useMeta";
```
<<<<<<< HEAD
`useMeta` take an array of meta objects with the `name` and `content`

Then use like this :

```js
useMeta([{name : 'description' , content: 'My beautiful page'} , {name : 'author' content:'John Doe'}]);
```
#### Demo

SOON...

---

=======

`useMeta` take an array of meta objects with the `name` and `content`

Then use like this :

```js
useMeta([{name : 'description' , content: 'My beautiful page'} , {name : 'author' content:'John Doe'}]);
```

#### Demo

SOON...

---
>>>>>>> dd32c7e96d319fa35d402fca4af52a75cee9806b
## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
