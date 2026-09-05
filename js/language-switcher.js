let currentLangData = {};

async function loadLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    currentLangData = await response.json();
    applyLanguage();
    localStorage.setItem("selectedLang", lang);
  } catch (error) {
    console.error("Language load failed:", error);
  }
}

function applyLanguage() {
  // Regular text elements
  document.querySelectorAll("[data-lang-key]").forEach(el => {
    const key = el.getAttribute("data-lang-key");
    if (currentLangData[key]) {
      el.innerHTML = currentLangData[key];
    }
  });

  // Placeholder text (inputs/textareas)
  document.querySelectorAll("[data-lang-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-lang-key-placeholder");
    if (currentLangData[key]) {
      el.setAttribute("placeholder", currentLangData[key]);
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en";
  loadLanguage(savedLang);
});