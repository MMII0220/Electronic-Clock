let day = document.querySelector('.day'),
  hours = document.querySelector('.hour'),
  minutes = document.querySelector('.minute'),
  meridiem = document.querySelector('.meridiem'),
  today = new Date();

let week = {
  1: 'MON',
  2: 'TUE',
  3: 'WED',
  4: 'THU',
  5: 'FRI',
  6: 'SAT',
  7: 'SUN',
};

function time(t) {
  d = t.getDay();
  h = t.getHours();
  m = t.getMinutes();
  mer = t.getHours();

  day.innerHTML = `${week[d]}`;

  if (h > 9) hours.innerHTML = `${h}`;
  else hours.innerHTML = `0${h}`;

  if (m > 9) minutes.innerHTML = `${m}`;
  else minutes.innerHTML = `0${m}`;

  if (mer > 11) meridiem.innerHTML = `PM`;
  else meridiem.innerHTML = `AM`;
}

time(today);
