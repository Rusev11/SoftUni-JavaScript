function solve() {

   function send() {
      console.log('adad');
      let inputText = document.getElementById('chat_input');
      let sentMessage = document.getElementById('chat_messages');
      let newMessage = document.createElement('div');
      newMessage.className = 'message my-message';
     
      newMessage.textContent = inputText.value;
      inputText.value = '';
      sentMessage.appendChild(newMessage);
   }

   let button = document.getElementById('send');
   button.addEventListener('click', send);
}


