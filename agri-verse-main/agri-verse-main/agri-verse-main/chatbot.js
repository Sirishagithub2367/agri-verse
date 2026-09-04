const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");

function addMessage(message, sender) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("message");

    if (sender === "user") {
        messageDiv.classList.add("user-message");
    } else {
        messageDiv.classList.add("bot-message");
    }

    const contentDiv = document.createElement("div");

    contentDiv.classList.add("message-content");

    contentDiv.textContent = message;

    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    // Show user's message
    addMessage(message, "user");

    // Clear input
    messageInput.value = "";

    // Temporary response
    setTimeout(() => {

        addMessage(
            "Thanks for your question! 🌱 I'm currently running in frontend-only mode. Soon I'll be connected to the AgriVerse AI backend.",
            "bot"
        );

    }, 500);
}


sendButton.addEventListener("click", sendMessage);


messageInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});