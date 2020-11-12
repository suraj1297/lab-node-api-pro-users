const JsRandomNumber = require('js-random-number');

const generateId = () => {
    const NumberConfig = new JsRandomNumber.Configuration();

    NumberConfig.setMinLength(4);
    NumberConfig.setMaxLength(4);

    const RandomNumber = new JsRandomNumber.Generator(NumberConfig)

    return RandomNumber.getNumber().getValue()
}

module.exports = generateId