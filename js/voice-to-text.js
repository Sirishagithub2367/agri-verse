function startVoiceInput(targetInputId) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice input not supported in this browser. Please use Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();
  const savedLang = localStorage.getItem("selectedLang") || "en";

  const langMap = {
    en: "en-IN",
    hi: "hi-IN",
    ta: "ta-IN"
  };
  recognition.lang = langMap[savedLang] || "en-IN";

  recognition.start();

  recognition.onresult = function (event) {
    const spokenText = event.results[0][0].transcript;
    const inputBox = document.getElementById(targetInputId);
    if (inputBox) {
      inputBox.value = spokenText;
    }
  };

  recognition.onerror = function (event) {
    console.error("Voice input error:", event.error);
    alert("Couldn't hear you clearly. Try again.");
  };
}