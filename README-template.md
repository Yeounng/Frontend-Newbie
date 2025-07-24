# Frontend Mentor - Bento grid solution

This is a solution to the [Bento grid challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bento-grid-RMydElrlOj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![screenshot](./Screenshot%202025-07-24%20at%2022-50-13%20Frontend%20Mentor%20Bento%20grid.png)

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

그리드에 대해 알아보았습니다. repeat(9, 1fr)로 설정하면 9칸이 지정되고 grid-column : 1 / 2하면 특정 칸을 선택하는 줄 알았는데 그리드에 의해 생성된 "줄"을 선택하는 것이였다.

그리드 갭을 넣을때 혹시나 박스외부에 마진이 있는지 확인하자.

grid-template-row : repeat(4, 1fr) 4열(칸) 생성. 줄은 1,2,3,4,5가 생성된다.(4개의 row track과 5개의 grid line이 생성되는 것)

template-row나 column을 만약 4까지만 줬어도 더 필요하면 6번째나 그 이후 줄을 선택해서 배치할 수 있다
이 경우 자동으로 늘어나며(생성되며) grid-auto-rows나 column값에 따라 크기를 추가로 생성되는 열이나 행의 크기를 지정 할 수 있다.

### Continued development

- 모바일 - pc 사이에 태블릿 사이즈 개발
- scss로 color정의 mixin , nesting 등 활용하기
- 쓸대없이 중복되거나 하는 css 정리하기 등

### Useful resources

- [CSS GRID 강의](https://studiomeal.com/archives/533) - css grid
- [CSS GRID 강의](https://www.heropy.dev/p/c6ROLZ) - css grid

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments
