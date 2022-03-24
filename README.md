# html-components
create html component with javascript  
demo: https://csslick.github.io/html-components/

## How to use

### Javascript Component
```
function header() {
  return `
    header HTML here...
  `
}

const headerName = '.header-component'; // class 요소명
document.querySelector(headerName).innerHTML = header();
```

### html 
```
  <div class="header-component">
    <script src="./components/header.js"></script>
  </div>
```
