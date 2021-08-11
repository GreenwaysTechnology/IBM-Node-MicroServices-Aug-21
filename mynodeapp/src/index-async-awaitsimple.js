

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'Hello!');
    })
}

//delay()

async function main() {
    //    delay()
    //     .then(res=>console.log(res))

    try {
        const res = await delay();
        console.log(res);
    } catch (err) {
        console.log(err);
    }

}
main();