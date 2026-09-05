function startVoiceInput(targetInputId) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice input not supported in this browser. Please use Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();
  const savedLang = localStorage.getItem("selectedLang") || "en";

  // Map our language codes to speech recognition language codes
  const langMap = {
    en: "en-IN",
    hi: "hi-IN",
    ta: "ta-IN"
  };
  recognition.lang = langMap[savedLang] || "en-IN";

  recognition.start();

  recognition.onresult = function (event) {