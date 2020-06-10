const promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ msg: 'Testing '}), 1000);
})

promiseObj
    .then((data) => {
        console.log('Inside Then', data)
        return data.msg
    })
    .then((m) => {
        console.log('Inside 2nd Then', m)
    })
    .catch(() => {
        console.log('Inside Catch')
    })
    // .finally(() => {
    //     console.log('Inside Finally')
    // })

console.log('Outside Promise')