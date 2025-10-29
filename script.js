document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("textInput");
  const wordCount = document.getElementById("wordCount");
  const charCount = document.getElementById("charCount");
  const sentenceCount = document.getElementById("sentenceCount");
  const readTime = document.getElementById("readTime");
  const yearEl = document.getElementById("year");
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.querySelector(".nav-list");

  // Year
  yearEl.textContent = new Date().getFullYear();

  // Live Word Counter
  textInput.addEventListener("input", () => {
    const text = textInput.value.trim();
    const words = text.match(/\b\S+\b/g) || [];
    const sentences = text.match(/[.!?]+/g) || [];
    const chars = text.length;
    const time = words.length > 0 ? (words.length / 200).toFixed(2) : 0; // ~200 wpm

    wordCount.textContent = words.length;
    charCount.textContent = chars;
    sentenceCount.textContent = sentences.length;
    readTime.textContent = `${time} min`;
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    const isOpen = navList.style.display === "flex";
    navList.style.display = isOpen ? "none" : "flex";
  });

  // Auto close menu on small screens
  document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 900) navList.style.display = "none";
    });
  });
});
