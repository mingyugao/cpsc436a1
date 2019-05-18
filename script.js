const pages = ['home', 'about'];
const data = '{"messages":[{"contentText":"Hemllo"},{"contentText":"It\'s me"},{"contentText":"I was wondering if after all these years"},{"contentText":"You\'d like to meet to go over everything"}]}';
const parsedData = JSON.parse(data);
const newDivKeyframes = [
  {opacity: 0.5, transform: 'translate(0, -2rem)'},
  {opacity: 1, transform: 'translate(0, 0)'}
];
const oldDivsKeyframes = [
  {transform: 'translate(0, -2rem)'},
  {transform: 'translate(0, 0)'}
];

const displayElement = (element, display) => {
  display
    ? element.style.display = 'block'
    : element.style.display = 'none';
};

const navigateTo = page => {
  pages.forEach(page => {
    displayElement(document.getElementById(page), false);
  });
  displayElement(document.getElementById(page), true);
};

const displayMessages = display => {
  const messages = document.getElementById('messages-container');
  display
    ? displayElement(messages, true)
    : displayElement(messages, false);
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
  return newDiv;
};

const clearForm = () => {
  document.getElementById('message-form').reset();
};

const submitMessage = () => {
  const messagesContainer = document.getElementById('messages-container');
  const newMessage = document
    .getElementById('message-form')
    .elements['message']
    .value;
  if (newMessage) {
    for (let i = 0; i < messagesContainer.children.length; i++) {
      messagesContainer.children[i].animate(oldDivsKeyframes, 500);
    }
    addMessage(newMessage, true).animate(newDivKeyframes, 500);
    const msgObj = {contentText: newMessage};
    parsedData.messages.push(msgObj);
  }
  clearForm();
  return false;
};

window.onload = () => {
  parsedData.messages.forEach(message => addMessage(message.contentText));
  navigateTo('home');
};
