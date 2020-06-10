const main = async () => {
// async function main() {
    const promiseObj = new Promise((resolve, reject) => {
        setTimeout(() => resolve('TEST'), 3000);
    });
    
    try {
        const data = await promiseObj;    
        console.log(data);
    } catch (e) {
        console.log(e)
    }

    console.log('Outside Promise');    
}

main()

console.log('Outside Main')