const setInnerText = (text) => {
  document.getElementById("quotes").innerText = text;
};
// for load button functionality;

const loadData = () => {
  const url = "https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data));
};

const display = ({ quote }) => {
  setInnerText(quote);
  const btnGroup = document.getElementById("btn-group");
  btnGroup.innerHTML = "";
  const refreshBtn = document.createElement("button");
  refreshBtn.innerText = "Refresh";
  refreshBtn.setAttribute("onclick", `refresh()`);
  btnGroup.appendChild(refreshBtn);
};
// for refresh button functionality;
const refresh = () => {
  const url = "https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => display2(data));
};

const display2 = ({ quote }) => {
  setInnerText(quote);
};
