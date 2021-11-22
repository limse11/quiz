var sr="'";
var trP = document.getElementById('trp');
var odpA = document.getElementById('odpa');
var odpB = document.getElementById('odpb');
var odpC = document.getElementById('odpc');
var oBox = document.getElementById('o-box');
var i = 0;
var awn = document.getElementById('awn');
function rawn(){
  awn.style.opacity = '0%';
}
function pyt(){
  trP.innerHTML = '1. W jaki sposób pobieramy element HTML za pomocą identyfikatora:';
  odpA.innerHTML = 'A.<span class="r"> document</span><span>.</span><span class="b">getId</span><span>(</span><span class="g">'+sr+'id'+sr+'</span><span>)</span>';
  odpB.innerHTML = 'B.<span class="r"> document</span><span>.</span><span class="b">getElementId</span><span>(</span><span class="g">'+sr+'id'+sr+'</span><span>)</span>';
  odpC.innerHTML = 'C.<span class="r"> document</span><span>.</span><span class="b">ElementId</span><span>(</span><span class="g">'+sr+'id'+sr+'</span><span>)</span>';
  oBox.innerHTML = '<button onclick="pytz()">A</button><button onclick="pytd()">B</button><button onclick="pytz()">C</button>';
}
pyt();
function pytd(){
  i++;
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="d.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pytdwa, 500);
}
function pytz(){
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="z.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pytdwa, 500);
}
function pytdwa(){
  console.log(i);
  trP.innerHTML = '2. W jaki sposób wpiszemy zawartość do elementu HTML:';
  odpA.innerHTML = 'A.<span> naszElement</span><span>.</span><span class="r">innerHTML</span>';
  odpB.innerHTML = 'B.<span> naszElement</span><span>.</span><span class="r">inHTML</span>';
  odpC.innerHTML = 'C.<span> naszElement</span><span>.</span><span class="r">innerContent</span>';
  oBox.innerHTML = '<button onclick="pytdwad()">A</button><button onclick="pytdwaz()">B</button><button onclick="pytdwaz()">C</button>';
}
function pytdwad(){
  i++;
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="d.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pyttrz, 500);
}
function pytdwaz(){
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="z.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pyttrz, 500);
}
function pyttrz(){
  console.log(i);
  trP.innerHTML = '3. Jaki zapis spowoduje wykonywanie funkcji co 0.5s:';
  odpA.innerHTML = 'A.<span class="b"> execute</span><span>(funkcja,</span><span class="go"> 500</span><span>)</span>';
  odpB.innerHTML = 'B.<span class="b"> setInterval</span><span>(funkcja,</span><span class="go"> 0.5</span><span>)</span>';
  odpC.innerHTML = 'C.<span class="b"> setInterval</span><span>(funkcja,</span><span class="go"> 500</span><span>)</span>';
  oBox.innerHTML = '<button onclick="pyttrzz()">A</button><button onclick="pyttrzz()">B</button><button onclick="pyttrzd()">C</button>';
}
function pyttrzd(){
  i++;
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="d.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pytcz, 500);
}
function pyttrzz(){
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="z.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pytcz, 500);
}
function pytcz(){
  console.log(i);
  trP.innerHTML = '4. Który to poprawny zapis zmiennej:';
  odpA.innerHTML = 'A.<span class="b"> make</span><span class="f"> var</span><span> zmienna</span>';
  odpB.innerHTML = 'B.<span class="f"> var</span><span> zmienna</span>';
  odpC.innerHTML = 'C.<span class="f"> var =</span><span> zmienna</span>';
  oBox.innerHTML = '<button onclick="pytczz()">A</button><button onclick="pytczd()">B</button><button onclick="pytczz()">C</button>';
}
function pytczd(){
  i++;
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="d.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pytpi, 500);
}
function pytczz(){
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="z.svg">'
  setTimeout(rawn, 1000);
  setTimeout(pytpi, 500);
}
function pytpi(){
  console.log(i);
  trP.innerHTML = '5. Jak załączymy plik js do dokumentu HTML:';
  odpA.innerHTML = 'A.<span> &lt;</span><span class="r">script</span><span class="go"> href</span><span>=</span><span class="g">"plik.js"</span><span>&gt;</span>';
  odpB.innerHTML = 'B.<span> &lt;</span><span class="r">script</span><span class="go"> src</span><span>=</span><span class="g">"plik.js"</span><span>&gt;</span>';
  odpC.innerHTML = 'C.<span> &lt;</span><span class="r">link</span><span class="go"> type</span><span>=</span><span class="g">"script"</span><span class="go"> href</span><span>=</span><span class="g">"plik.js"</span><span>&gt;</span>';
  oBox.innerHTML = '<button onclick="pytpiz()">A</button><button onclick="pytpid()">B</button><button onclick="pytpiz()">C</button>';
}
function pytpid(){
  i++;
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="d.svg">'
  setTimeout(rawn, 1000);
  setTimeout(wyn, 500);
}
function pytpiz(){
  awn.style.opacity = '100%';
  awn.innerHTML = '<img src="z.svg">'
  setTimeout(rawn, 1000);
  setTimeout(wyn, 500);
}
function wyn(){
  document.body.innerHTML = '<div id="s-border"><div id="br-in"><div class="b-box" style="background-color: rgb(30, 215, 38);"></div><div class="b-box" style="background-color: red"></div><div class="b-box" style="background-color: blue"></div><div class="b-box" style="background-color: yellow;"></div></div></div><div id="s-text"><h1>Twój wynik:</h1><h2>'+i+'/5</h2><button id="start" onclick="ref()">Rozwiąż ponownie</button></div>';
}
function ref(){
  window.location.reload();
}
