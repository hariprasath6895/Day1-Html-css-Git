const sayHello = (user, cb, cb1, cb2) => { // cb = () => console.log('DONE!!!')
    console.log('Hello ', user)
    // cb()
    cb1()
    cb2()
}

sayHello(
    'Ravi', 
    () => console.log('DONE!!!'),
    () => console.log('DONE!!! 1'),
    () => console.log('DONE!!! 2'),
)