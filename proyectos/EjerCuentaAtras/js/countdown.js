simplyCountdown('#cuenta', {
  year: 2024,
  month: 1,
  day: 1,
  hours: 0,
  minutes: 00,
  seconds: 0,
  words: {
    days: 'Día',
    hours: 'Hora',
    minutes: 'Minuto',
    seconds: 'Segundo',
    pluralLetter: 's'
  },
  plural: true, //use plurals
  inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
  inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
  // in case of inline set to false
  enableUtc: true, //Uso del reloj universal
  onEnd: function () {
    document.getElementById('portada').classList.add('oculta');
    return;
  },
  refresh: 1000,
  sectionClass: 'simply-section',
  amountClass: 'simply-amount',
  wordClass: 'simply-word',
  zeroPad: false,
  countUp: false
});
