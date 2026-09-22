(function () {
  const tabs = [...document.querySelectorAll("#sectionTabs a")];
  if (!tabs.length) return;

  const sections = tabs
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  const spy = () => {
    const offset = 80;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top - offset <= 0) current = section;
    }
    if (!current) return;
    tabs.forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("href") === "#" + current.id);
    });
  };

  window.addEventListener("scroll", spy, { passive: true });
  spy();
})();
