# Frontend Mentor - Job listings with filtering solution

This is my solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size ✅
- See hover states for all interactive elements on the page ✅
- Filter job listings based on the categories ✅

### Screenshot

![](/public/job-listings.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Removing a filter turned out to be quite tricky to implement. It took me a while to get it working correctly.

```js
function removeFilter(filterArr) {
  let _jobs = [...allJobsCopy];
  if (filterArr.length > 0) {
    for (let i = 0; i < filterArr.length; i++) {
      const filtered = _jobs.filter((job) => {
        return (
          job.role === filterArr[i] ||
          job.level === filterArr[i] ||
          job.languages.some((lang) => lang === filterArr[i]) ||
          job.tools.some((tool) => tool === filterArr[i])
        );
      });
      _jobs = filtered;
    }
  }
  setAllJobs(_jobs);
}
```

### Useful resources

- [scrimba](https://www.scrimba.com) - This is in my opinion the best place to learn web development.
- [stack overflow](https://stackoverflow.com/) - Whenever I got stuck, I always found some insight here.

## Author

- Website - [here](https://www.tanuikiprop.gq)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)
