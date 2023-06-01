# Semantics tag

- HTML 4.x 이하에서는 대부분의 Layout 을 만들 때 주로 div tag를 사용하여 구성하였다.
- tag 와 tag 가 겹쳐지고, 복잡한 Layout을 형성하게 되면 tag 의 범위(box 범위)가 불분명하여 유지보수를 하기가 매우 어려워 진다.
- HTML 파일은 태생이 구조적 환경과는 거리가 멀기 때문에 파일의 tag 들이 겹치고 겹쳐지는 구성이 많다
- 이러한 부분은 개발자(front-end)들에게 많은 어려움을 주었다
- HTML5 에서는 div tag 대신에 단어자체가 의미를 갖는 semantics tag를 도입하였다.
- HTML5 에서는 div 로 구성하는 Layout 대신에 semantic tag를 사용할 것을 적극 권장한다.

## semantics tag 로 layout 만들기

- header 만들기

```html
<!-- html4 -->
<div id="header">여기는 제목</div>

<!-- html5 -->
<header>여기는 제목</header>
```

- nav 만들기
- 화면의 상단 또는 좌우에 배치되는 메뉴 구성

```html
<!-- html4 -->
<div id="nav">여기는 메뉴</div>

<!-- html5 -->
<nav>여기는 메뉴</nav>
```

- section 만들기
- 구체적으로 보여질 화면의 본문 부분

```html
<!-- html4 -->
<div id="body">여기는 본문</div>
<div id="section">여기는 본문</div>

<!-- html5 -->
<section>여기는 본문</section>
```

- article
- 본문의 구역 나누기

```html
<!-- html4 -->
<div id="section">
  <div id="article1">Article</div>
  <div id="article2">Article</div>
  <div id="article3">Article</div>
</div>

<!-- html5 -->
<section>
  <article>Article</article>
  <article>Article</article>
  <article>Article</article>
</section>
```

- footer(꼬리말)
- 회사의 주소, 전화번호, Email 등에 대한 정보를 표시하는 곳

```html
<!-- html4 -->
<div id="footer">
  <div id="address">서울특별시</div>
  <div id="email">asdf@asdf.com</div>
  <div id="tel">010-111-1111</div>
</div>

<!-- html5 -->
<footer>
  <address id="address">서울특별시</address>
  <address id="email">asdf@asdf.com</address>
  <address id="tel">010-111-1111</address>
</footer>
```
