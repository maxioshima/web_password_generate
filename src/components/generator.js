export default function generator( length, setPassword ) {
    console.log(setPassword)
    let password = [];

    //TODO: add choise of arguments
    let rule_object = {
        literals: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
        numbers: '1234567890',
        symbols: '!#$%&()*+,-./:;<=>?@[]^_`{|}~'
    }
    let i = 0;

    while (i < length) {
        password.push(rule_object.literals.split('')[Math.floor(Math.random() * (62 - 0))]);
        i++
    }

    setPassword(password.join(''))
}