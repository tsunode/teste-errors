const AppError = require("./Error")

const users = {
    index: (request, response) => {
        const t = 3;

        // t= 4;
            // ... buscou no banco
        if(true) {
            console.log('aqui')
            throw new AppError('Esse erro', 500, errors)
            // response.status(404).send('')
        }
    }
}

module.exports = users;