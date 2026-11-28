{
  const carousel = document.querySelector("[data-feature-carousel]");
  const controls = carousel.querySelector("[data-carousel-controls]");
  const slides = carousel.querySelector("[data-carousel-slides]");
  const panels = Array.from(slides.children);
  const pickers = Array.from(carousel.querySelectorAll("[data-carousel-picker]"));
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const rotationInterval = 7000;

  let activeIndex = 0;
  let hovered = window.matchMedia("(hover: hover)").matches && carousel.matches(":hover");
  let swipeStart;
  let timer;

  function showSlide(index) {
    activeIndex = (index + panels.length) % panels.length;
    panels.forEach((panel, position) => {
      const selected = position === activeIndex;
      panel.hidden = !selected;
      pickers[position].setAttribute("aria-pressed", String(selected));
    });
    scheduleRotation();
  }

  function scheduleRotation() {
    window.clearTimeout(timer);
    const focus = document.activeElement;
    const keyboardFocus = carousel.contains(focus) && focus.matches(":focus-visible");
    if (!motionPreference.matches && !hovered && !swipeStart && !keyboardFocus && !document.hidden) {
      timer = window.setTimeout(() => showSlide(activeIndex + 1), rotationInterval);
    }
  }

  function applyMotionPreference() {
    slides.setAttribute("aria-live", motionPreference.matches ? "polite" : "off");
    scheduleRotation();
  }

  pickers.forEach((picker, index) => {
    picker.addEventListener("click", () => showSlide(index));
  });
  carousel.querySelectorAll("[data-carousel-step]").forEach((arrow) => {
    arrow.addEventListener("click", () => showSlide(activeIndex + Number(arrow.dataset.carouselStep)));
  });

  slides.addEventListener("touchstart", (event) => {
    swipeStart = event.touches.length === 1 ? event.touches[0] : undefined;
    scheduleRotation();
  }, { passive: true });

  slides.addEventListener("touchend", (event) => {
    const start = swipeStart;
    swipeStart = undefined;
    const end = start && Array.from(event.changedTouches).find((touch) => touch.identifier === start.identifier);
    if (end && event.cancelable) {
      const horizontal = end.clientX - start.clientX;
      const vertical = end.clientY - start.clientY;
      if (Math.abs(horizontal) >= 45 && Math.abs(horizontal) > Math.abs(vertical)) {
        event.preventDefault();
        showSlide(activeIndex + (horizontal < 0 ? 1 : -1));
        return;
      }
    }
    scheduleRotation();
  }, { passive: false });

  slides.addEventListener("touchcancel", () => {
    swipeStart = undefined;
    scheduleRotation();
  }, { passive: true });

  carousel.addEventListener("focusin", scheduleRotation);
  carousel.addEventListener("focusout", () => queueMicrotask(scheduleRotation));

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

  motionPreference.addEventListener("change", applyMotionPreference);
  document.addEventListener("visibilitychange", scheduleRotation);

  carousel.setAttribute("aria-roledescription", "カルーセル");
  panels.forEach((panel) => panel.setAttribute("aria-roledescription", "スライド"));
  carousel.setAttribute("data-carousel-ready", "");
  controls.hidden = false;
  showSlide(0);
  applyMotionPreference();
}
