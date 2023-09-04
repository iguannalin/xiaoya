window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  const r = () => getRandomInt(5, 10);

  function displayText(t) {
    if (!t || t.length < 1) return;
    let prev = "";
    t.split(" ").forEach((ph, index) => {
      if (index % 2 == 0) prev = ph;
      else {
        const p = document.createElement("p");
        p.innerHTML = prev + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;` + ph; //t.substring(0, getRandomInt(1, t.length));
        p.style.marginTop = `${(index % 3 == 0 ? 100 : 0) + getRandomInt(0, 10)}px`;
        p.style.lineHeight = `${r()*2}px`;
        p.style.letterSpacing = `${getRandomInt(0,7)}px`;
        container.appendChild(p);
      }
    });
  }

  // xiaoya source -- http://www.xys.org/xys/classics/poetry/pre-Tang/xiaoya.txt
  fetch("xiaoya.json").then((r) => r.json()).then((result) => {
    const text = Object.values(result);
    displayText(text[getRandomInt(0, text.length)]);
  })
});