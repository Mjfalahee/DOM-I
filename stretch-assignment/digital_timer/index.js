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
  Tens.style.color = 'blue';

  let Ones = document.getElementById('secondOnes');
  Ones.style.color = 'red';
  let msHundreds = document.getElementById('msHundreds');
  msHundreds.style.color = 'green';
  let msTens = document.getElementById('msTens');
  msTens.style.color = 'orange';