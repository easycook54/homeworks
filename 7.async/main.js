function testCase() {
 let clock = AlarmClock ()

 clock.addClock(clock.getCurrentFormattedTime(), () => console.log('Пора вставать'), 1);
 now.setMinutes(now.getMinutes() + 1);
 clock.addClock(("0" + now.getHours()).slice(-2)   + ":" + ("0" + now.getMinutes()).slice(-2), () => {
    console.log('Давай вставай уже!');
    clock.removeClock(2);
 }, 2);

clock.addClock('09:02', () => console.log('Вставай, а то проспишь!'), 2);
now.setMinutes(now.getMinutes() + 1);
clock.addClock(("0" + now.getHours()).slice(-2)   + ":" + ("0" + now.getMinutes()).slice(-2), () => {
    console.log('Иди умываться!((');
    clock.clearAlarms();
    clock.printAlarms();
 }, 3);
clock.printAlarms();
clock.start();
}