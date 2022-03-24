// 자바스크립트로 생성된 html components
function header () {
  return `
    <header>
    <h1>logo</h1>
    <nav id="gnb">
      <ul>
        <li><a href="#">menu</a>
          <ul class="depth2">
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
          </ul>
        </li>
        <li><a href="#">menu</a>
          <ul class="depth2">
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
          </ul>
        </li>
        <li><a href="#">menu</a>
          <ul class="depth2">
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
          </ul>
        </li>
        <li><a href="#">menu</a>
          <ul class="depth2">
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
            <li><a href="#">sub</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
  `
}

// 문서에 html 생성
const headerName = '.header-component'; // class 요소명
document.querySelector(headerName).innerHTML = header();