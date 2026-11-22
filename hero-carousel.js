{
  const carousel = document.querySelector("[data-feature-carousel]");
  const controls = carousel.querySelector("[data-carousel-controls]");
  const rotation = carousel.querySelector("[data-carousel-rotation]");
  const slides = carousel.querySelector("[data-carousel-slides]");
  const panels = Array.from(slides.children);
  const pickers = Array.from(carousel.querySelectorAll("[data-carousel-picker]"));
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const rotationInterval = 7000;

  let activeIndex = 0;
  let rotating = !motionPreference.matches;
  let hovered = window.matchMedia("(hover: hover)").matches && carousel.matches(":hover");
  let timer;

  function showSlide(index) {
    activeIndex = index;
    panels.forEach((panel, position) => {
      const selected = position === index;
      panel.hidden = !selected;
      pickers[position].setAttribute("aria-pressed", String(selected));
    });
  }

  function scheduleRotation() {
    window.clearTimeout(timer);
    if (rotating && !hovered && !document.hidden) {
      timer = window.setTimeout(() => {
        showSlide((activeIndex + 1) % panels.length);
        scheduleRotation();
      }, rotationInterval);
    }
  }

  function setRotation(enabled) {
    rotating = enabled;
    rotation.textContent = enabled ? "自動切替を停止" : "自動切替を再開";
    slides.setAttribute("aria-live", enabled ? "off" : "polite");
    scheduleRotation();
  }

  rotation.addEventListener("click", () => setRotation(!rotating));
  pickers.forEach((picker, index) => {
    picker.addEventListener("click", () => {
      setRotation(false);
      showSlide(index);
    });
  });

  carousel.addEventListener("focusin", (event) => {
    // Let a pointer click use the action the rotation button displayed before it was focused.
    if (event.target !== rotation || rotation.matches(":focus-visible")) {
      setRotation(false);
    }
  });

  carousel.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") {
      hovered = true;
      scheduleRotation();
    }
  });
  carousel.addEventListener("pointerleave", (event) => {
    if (event.pointerType !== "touch") {
      hovered = false;
      scheduleRotation();
    }
  });

  motionPreference.addEventListener("change", (event) => {
    if (event.matches) setRotation(false);
  });
  document.addEventListener("visibilitychange", scheduleRotation);

  carousel.setAttribute("aria-roledescription", "カルーセル");
  panels.forEach((panel) => panel.setAttribute("aria-roledescription", "スライド"));
  carousel.setAttribute("data-carousel-ready", "");
  controls.hidden = false;
  showSlide(0);
  setRotation(rotating);
}
