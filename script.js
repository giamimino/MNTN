const options = {
  threshold: 0.2,
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, options);

const elements = document.querySelectorAll(".fadeInLeft", ".fadeInRight");
elements.forEach((el) => observer.observe(el))
const fadeInRights = document.querySelectorAll(".fadeInRight");
fadeInRights.forEach((el) => observer.observe(el))

const autoBlur = document.querySelectorAll(".autoBlur");
autoBlur.forEach((el) => observer.observe(el))
