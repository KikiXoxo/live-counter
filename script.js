'use strict';

const counters = document.querySelectorAll('.counter');
const section2 = document.querySelector('#section--2');

let counted = 0;

const increaseCount = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; // Guard clause

  const timer = setInterval(function () {
    counted++;

    counters.forEach(counter => {
      if (counted > +counter.dataset.num) return;
      counter.textContent = `+${counted}`;
    });

    if (counted > 1000) clearInterval(timer);
  }, 6);
  observer.unobserve(section2);
};

const counterObserver = new IntersectionObserver(increaseCount, {
  root: null,
  threshold: 0.95,
});

counterObserver.observe(section2);
