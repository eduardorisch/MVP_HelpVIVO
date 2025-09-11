function sendMessage() {
      const input = document.getElementById("userInput");
      const msg = input.value.trim();
      if (msg === "") return;

      const chatMessages = document.getElementById("chatMessages");

      // Mensagem do usuário
      const userMsg = document.createElement("div");
      userMsg.className = "message user align-self-end mt-3";
      userMsg.textContent = msg;
      chatMessages.appendChild(userMsg);

      input.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
}