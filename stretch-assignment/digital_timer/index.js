{/* <body>
    <div class="digits">
      <div class="digit" id="secondTens">-</div>
      <div class="digit" id="secondOnes">-</div>
      <div class="digit" id="colon">:</div>
      <div class="digit" id="msHundreds">-</div>
      <div class="digit" id="msTens">-</div>
    </div>
  </body> */}

  //setTimeout(function, milliseconds)
  //setInterval(function, milliseconds)

let counter = document.querySelector('div');

let Tens = document.getElementById('secondTens');
  //Tens.style.color = 'blue';
let tens = 0;
let ones = 0;
let mshundreds = 0;
let mstens = 0;
let tenscount = window.setInterval(function () {
     tens++;
    Tens.textContent = tens;
    if (tens > 0)
    {
        counter.style.color = 'red';
        // Tens.style.color = 'red';
        clearInterval(tenscount);
    }
 }, 10000);
let Ones = document.getElementById('secondOnes');
  //Ones.style.color = 'red';
let onescount = window.setInterval(function() {
    ones++;
    if (ones > 9)
     {
        ones = 0;
     }
    Ones.textContent = ones;
    if (tens > 0)
    {
        // Ones.style.color = 'red';
        clearInterval(onescount);
    }
    
 },1000);

let msHundreds = document.getElementById('msHundreds');
  //msHundreds.style.color = 'green';
let mshuncount = window.setInterval(function() {
    mshundreds++;
    if (mshundreds > 9)
    {
        mshundreds = 0;
    }
    msHundreds.textContent = mshundreds;
    if (tens > 0)
    {
        // msHundreds.style.color = 'red';
        clearInterval(mshuncount);
    }
}, 100);

let msTens = document.getElementById('msTens');
 // msTens.style.color = 'orange';

msTens.textContent = mstens;
let mstenscount = window.setInterval(function() {
    mstens++;
    if (mstens > 9)
    {
        mstens = 0;
    }
    msTens.textContent = mstens;
    if (tens > 0)
    {
        // msTens.style.color = 'red';
        clearInterval(mstenscount);
    }
}, 10);

