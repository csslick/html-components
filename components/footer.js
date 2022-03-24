// footer component
function footer() {
  return `
    <h1>footer</h1>
  `
}

const footerName = '.footer-component'; // class 요소명
document.querySelector(footerName).innerHTML = footer();