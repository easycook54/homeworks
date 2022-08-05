'use strict'

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
       if (isNaN(id)) {
        throw new Error('Ошибка! Параметр id не передан');
       }
       else if (this.alarmCollection.some(item => item.id === id)) {
        console.error('Звонок с такми id уже есть');
        return;
       }
       this.alarmCollection.push({
        id, time, callback
       });
    }
    
    
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
 
    }


    removeClock(id) {
        let firstLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((item) =>item.id != id);
        let lastLength = this.alarmCollection.length;
        return firstLength != lastLength
    }


    start() {
        const checkClock = (item) => {       
            if (this.getCurrentFormattedTime() === item.time) {
                return item.callback();
            }
        };
        
        if (this.timerId !== null) {
            return;
        }
        
        let interval = setInterval(() => {
            this.alarmCollection.forEach(item => checkClock(item));
        },
            3000
        );
        this.timerId = interval;
    }


    stop() {
        if (this.timerId == null) {
          return;
        }
        clearInterval(this.timerId);
        this.timerId = null;
    }


    printAlarms() {
        return this.alarmCollection.forEach(clock => console.log(clock.id + ': ' + clock.time));
    }


    clearAlarms() {
        this.alarmCollection = [];
        this.stop();
    }
}

