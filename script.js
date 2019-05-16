const pages = ['home', 'about'];
const data = '{"messages":[{"contentText":"Hemllo"},{"contentText":"It\'s me"},{"contentText":"I was wondering if after all these years"},{"contentText":"You\'d like to meet to go over everything"}]}';

const hideAllPages = () => {
  pages.forEach(page => {
    document.getElementById(page).style = '';
  });
};

const navigateTo = page => {
  hideAllPages();
  document.getElementById(page).style.display = 'block';
};

const appendMessage = message => {
  const newDiv = document.createElement('div');
  const newText = document.createTextNode(message);
  newDiv.appendChild(newText);
  newDiv.classList.add('message');
  document.getElementById('messages-container').appendChild(newDiv);
};

window.onload = () => {
  const parsed = JSON.parse(data);
  parsed.messages.forEach(message => appendMessage(message.contentText));
  navigateTo('home');
};
