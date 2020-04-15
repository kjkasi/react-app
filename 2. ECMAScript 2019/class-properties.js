// Class properties

class Counter {
    count = 1;

    inc = () => {
        this.count += Counter.incStep;
        console.log(this.count);
    }

    static incStep = 2;

    static incAll = function(arr) {
        arr.forEach((c) => c.inc());
    };
}

Counter.incAll([]);

const cnt = new Counter();

console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc, 1000);


// старый способ
// class Counter1 {
    
//     constructor() {
//         this.count = 0;
//         this.inc = () => {
//             this.count += Counter.incStep;
//         }
//     }
// }

// Counter1.incStep = 2;
// Counter1.incAll = function(arr) {
//     arr.forEach((c) => c.inc());
// };

// Counter1.incAll([]);