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
 window.setInterval(function () {
     tens++;
    Tens.textContent = tens;
 }, 10000);
let Ones = document.getElementById('secondOnes');
  //Ones.style.color = 'red';
window.setInterval(function() {
    ones++;
    if (ones > 9)
     {
        ones = 0;
     }
    Ones.textContent = ones;
    
 },1000);

let msHundreds = document.getElementById('msHundreds');
  //msHundreds.style.color = 'green';
window.setInterval(function() {
    mshundreds++;
    if (mshundreds > 9)
    {
        mshundreds = 0;
    }
    msHundreds.textContent = mshundreds;
    
}, 100);

let msTens = document.getElementById('msTens');
 // msTens.style.color = 'orange';

 msTens.textContent = mstens;
 window.setInterval(function() {
    mstens++;
    if (mstens > 9)
    {
        mstens = 0;
    }
    msTens.textContent = mstens;
    
}, 10);