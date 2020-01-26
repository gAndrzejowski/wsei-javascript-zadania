const countHello = (helloLimit) => {
    let counter = 0;
    const intervalRef = window.setInterval(() => {
        console.log("Hello");
        counter ++;
        if (counter >= helloLimit) window.clearInterval(intervalRef);
    },200);
};

countHello(7);