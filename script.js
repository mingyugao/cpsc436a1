const pages = ['home', 'about'];
const data = '{"messages":[{"contentText":"Hemllo"},{"contentText":"It\'s me"},{"contentText":"I was wondering if after all these years"},{"contentText":"You\'d like to meet to go over everything"}]}';
const parsedData = JSON.parse(data);

const hideAllPages = () => {
  pages.forEach(page => {
    document.getElementById(page).style = '';
  });
};

const navigateTo = page => {
  hideAllPages();
  document.getElementById(page).style.display = 'block';
};

const displayMessages = display => {
  const messages = document.getElementById('messages-container');
  display
    ? messages.style.display = 'block'
    : messages.style.display = 'none';
};

const addMessage = (message, pre) => {
  const newDiv = document.createElement('div');
  const newText = document.createTextNode(message);
  newDiv.appendChild(newText);
  newDiv.classList.add('message');
  const messagesContainer = document.getElementById('messages-container');
  pre
    ? messagesContainer.prepend(newDiv)
    : messagesContainer.appendChild(newDiv);
};

const clearMessageInput = () => {
  document.getElementById('message-input').value = '';
};

const submitMessage = () => {
  const newMessage = document.getElementById('message-input').value;
  if (newMessage) {
    addMessage(newMessage, true);
    const msgObj = {contentText: newMessage};
    parsedData.messages.push(msgObj);
    console.log(parsedData.messages);
  }
  clearMessageInput();
  return false;
};

window.onload = () => {
  parsedData.messages.forEach(message => addMessage(message.contentText));
  navigateTo('home');
};
