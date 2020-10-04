---
title: Handling Events
date: "2015-05-06T23:46:37.121Z"
categories: cat2
tags: ["egg", "wiki"]
---

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:


> *React events are named using camelCase, rather than lowercase.

> *With JSX you pass a function as the event handler, rather than a string.

For example, the HTML:
```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```
is slightly different in React:
```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```
Another difference is that you cannot return false to prevent default behavior in React. You must call preventDefault explicitly. For example, with plain HTML, to prevent the default link behavior of opening a new page, you can write:

```html
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
```
In React, this could instead be:

```jsx
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```
Here, e is a synthetic event. React defines these synthetic events according to the W3C spec, so you don’t need to worry about cross-browser compatibility. React events do not work exactly the same as native events. See the SyntheticEvent reference guide to learn more.

When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.
