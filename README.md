# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![screenshot](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS 변수 지정해서 컬러 사용해보기
- JS로 active class 토글로 인터랙션 제작

### What I learned

자바스크립트를 사용하며 querySelector와 getElementBy의 차이점. eventListener 사용, classList로 클래스조작 방법 등을 공부하였음

### Continued development

기본구조를 section -> inner -> wrap -> box 구조를 사용했는데 과하진 않은지?
wrap에 border-radius를 적용했는데 자식요소들이 wrap의 border밖으로 빠져나온다.
overflow:hidden 을 적용하니 share 버튼 popup 요소가 짤려버려서.. 수정이 필요하다.

모바일 디자인에서 pop up요소 등장시 위치를 잡아줄 기준점이 애매해져버렸다.

하단의 article-user-profile 부분 구성이 article-user-profile > sns-share > share-popup 구조라 모바일 디자인에서 popup 요소를 article-user-profile 기준으로 포지션을 잡아야 하는데 popup 직계부모가 sns-share라서 괜히 복잡해진듯?

sns-share 버튼을 더 상위요소인 article-content의 자식으로두고 우측하단에 정렬했으면 됐지 않나 싶다.

결론은 모바일 popup애니메이션이 맘에 안드는데 HTML 구조를 바꿔야한다.

### Useful resources

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
