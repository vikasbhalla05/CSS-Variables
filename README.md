# Changing CSS variables using JS dynamically

### Project learnings

- css variable declaration in :root
- variable syntax --var_name
- accessing variables inside css using var(--var_name)
- capturing input value using querySelectorAll and adding MULTIPLE event listener for 2 events on the element

```
['change','mousemove'].forEach(evt => inputs.addEventListener(evt, handleUpdate));
```

- passing in the function for the event listener
- adding suffix like 'px' for the data-values using the dataset object in elements
- getting and setting of the css variable using

```
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```