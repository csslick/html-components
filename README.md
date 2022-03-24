# html-components
create html component with javascript
- demo: https://csslick.github.io/html-components/

## How to use

### Javascript Component
```
function footer() {
  return `
    <h1>footer</h1>
  `
}

const footerName = '.footer-component'; // class 요소명
document.querySelector(footerName).innerHTML = footer();
```

### html 
```
  <div class="header-component">
    <script src="./components/header.js"></script>
  </div>
```
