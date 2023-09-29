// async

const fetchData = () => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            res('Done!');
        }, 1500);
        rej('err');
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then((done) => {
            console.log(done);
            return fetchData();
        })
        .then((text2) => {
            console.log(text2);
        })
        .catch((err) => {
            console.log(err);
        });
}, 2000);

console.log('hello1');
console.log('hello2');
