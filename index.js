function saturdayFun(value = 'roller-skate') {
  return 'This Saturday, I want to ' + value + '!';
}

function mondayWork(value = 'go to the office') {
  return 'This Monday, I will ' + value + '.';
}

function wrapAdjective(sym = '*') {
  return function(role) {
    return 'You are ' + sym + role + sym + '!';
  }
}