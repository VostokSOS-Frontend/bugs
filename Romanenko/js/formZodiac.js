'strict mode';
document.getElementsByName('btn-submit')[0].onclick = () => {
  const day = +document.getElementsByName('input-day')[0].value;
  const month = +document.getElementsByName('input-month')[0].value;
  let output = '';
  if ((month == 3) && (day >=21 && day <= 31))   {
    output='oven';
} else if ((month == 4) && (day >=1 && day <= 19))   {
    output='oven';
} else if ((month == 4) && (day >=20 && day <= 31))   {
    output='telec';
} else if ((month == 5) && (day >=1 && day <= 20))   {
    output='telec';
} else if ((month == 5) && (day >=21 && day <= 31))   {
    output='blizneci';
} else if ((month == 6) && (day >=1 && day <= 21))   {
    output='blizneci';
} else if ((month == 6) && (day >=22 && day <= 31))   {
    output='rak';
} else if ((month == 7) && (day >=1 && day <= 22))   {
    output='rak';
} else if ((month == 7) && (day >=23 && day <= 31))   {
    output='lev';
} else if ((month == 8) && (day >=1 && day <= 21))   {
    output='lev';
} else if ((month == 8) && (day >=21 && day <= 31))   {
    output='deva';
} else if ((month == 9) && (day >=1 && day <= 22))   {
    output='deva';
} else if ((month == 9) && (day >=23 && day <= 31))   {
    output('vesi');
} else if ((month == 10) && (day >=1 && day <= 23))   {
    output='vesi';
} else if ((month == 10) && (day >=24 && day <= 31))   {
    output='scorpion';
} else if ((month == 11) && (day >=1 && day <= 22))   {
    output='scorpion';
} else if ((month == 11) && (day >=23 && day <= 31))   {
    output='strelec';
} else if ((month == 12) && (day >=1 && day <= 21))   {
    output='strelec';
} else if ((month == 12) && (day >=22 && day <= 31))   {
    output='kozerog';
} else if ((month == 1) && (day >=1 && day <= 19))   {
    output='kozerog';
} else if ((month == 1) && (day >=20 && day <= 31))   {
    output='vodoley';
} else if ((month == 2) && (day >=1 && day <= 18))   {
    output='vodoley';
} else if ((month == 2) && (day >=19 && day <= 31))   {
    output='ribi';
} else if ((month == 3) && (day >=1 && day <= 20))   {
    output='ribi';
} 
  document.getElementsByName('output')[0].innerHTML = output;
}