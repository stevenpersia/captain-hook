<h1 align="center">Captain hook</h1>
<p align="center"><img alt="captain hook" src="./captain-hook.gif" width="300"/></p>

## Overview

Here is a modest list of hooks that I use every day. I will add more in the next few days, keep watching. And if you have some good hooks I would love to add them. So feel free to open a pull request.

## Hooks

### `useFetch` - [View code](useFetch.js)

Useful hook if you want to fetch data.

#### How to use

Import hook :

```jsx
import useFetch from "hooks/useFetch";
```

Then use like this :

```jsx
const { response, errors } = useFetch("https://github.com/stevenpersia/");
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusefetch-2qmcr)

---

### `useFullScreen` - [View code](useFullScreen.js)

Useful hook if you want to fullscreen an element of your page.

#### How to use

Import hook :

```jsx
import useFullScreen from "hooks/useFullScreen";
```

Add :

```jsx
const { elementFS, triggerFS, exitFS, isFS } = useFullScreen();
```

Then use like this :

```jsx
<div ref={elementFS}>I want to fullscreen this div.</div>
<button onClick={triggerFS}>Trigger fullscreen</button>
<button onClick={exitFS}>Exit fullscreen</button>
```

Check if fullscreen is triggered :

```jsx
console.log(isFS);
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusefullscreen-u6uih)

---

### `useHover` - [View code](useHover.js)

Useful hook if you want to detect when the mouse is hovering an element.

#### How to use

Import hook :

```jsx
import useHover from "hooks/useHover";
```

Add :

```jsx
const [hoverRef, isHovered, event] = useHover();
```

Then use like this :

```jsx
<div ref={hoverRef}>{isHovered ? "Hovered ! at " + [event.pageX, event.pageY].join(",") : "Hover me !"}</div>
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusehover-ckmz2)

---

### `useKeyPress` - [View code](useKeyPress.js)

Useful hook if you want to detect when user is pressing a specific key.

#### How to use

Import hook :

```jsx
import useKeyPress from "hooks/useKeyPress";
```

Then use like this :

```jsx
const hKeyPressed = useKeyPress("h");

console.log(hKeyPressed && "Hello !");
// → Hello !
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusekeypress-neto1)

---

### `useTitle` - [View code](useTitle.js)

Useful hook if you want to set a specific title to page.

#### How to use

Import hook :

```jsx
import useTitle from "hooks/useTitle";
```

Then use like this :

```jsx
useTitle("My title");
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusetitle-py3uz)

---

### `useToggle` - [View code](useToggle.js)

Useful hook if you want display/hide something with toggle.

#### How to use

Import hook :

```jsx
import useToggle from "hooks/useToggle";
```

Then use like this :

```jsx
const [open, toggle] = useToggle(false);

<Button onClick={toggle}>Show filters</Button>;

{
	open && <Filters />;
}
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusetoggle-bqe9w)

---

### `useEventListener` - [View code](useEventListener.js)

Useful hook if you want to create an event handler.

#### How to use

Import hook :

```jsx
import useEventListener from "hooks/useEventListener";
```

Then use like this :

```jsx
const [coords, setCoords] = useState({ x: 0, y: 0 });

useEventListener("mousemove", ({ clientX, clientY }) =>
	setCoords({ x: clientX, y: clientY })
);

console.log(coords);
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookuseeventlistener-rtrkc)

---

### `useInfiniteScroll` - [View code](useInfiniteScroll.js)

Useful hook if you want to add the infinite scroll feature to your website.

#### How to use

Import hook :

```jsx
import useInfiniteScroll from "hooks/useInfiniteScroll";
```

Then use like this :

```jsx
const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

const fetchData = () => {
	// ...
};
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookuseinfinitescroll-5jd3n)

---

### `useFavicon` - [View code](useFavicon.js)

Useful hook if you want to set a specific favicon to the page.

#### How to use

Import hook :

```jsx
import useFavicon from "hooks/useFavicon";
```

Then use like this :

```jsx
useFavicon("/path/image.png", "image/png");
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusefavicon-1q52i)

---

### `useDebounce` - [View code](useDebounce.js)

Useful hook if you want to set a debounced value.

#### How to use

Import hook :

```jsx
import useDebounce from "hooks/useDebounce";
```

Then use like this :

```jsx
const delay = 1000;
const debouncedValue = useDebounce(value, delay);
```

#### Demo

[View in CodeSandbox](https://codesandbox.io/s/captain-hookusedebounce-m199m)

---

## Star, Fork, Clone & Contribute

Feel free to contribute on this repository. If my work helps you, please give me back with a star. This means a lot to me and keeps me going!
