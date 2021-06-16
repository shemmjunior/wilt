module.exports = (router) => {
    const auth = require('./index')

    router.post('/auth/signup', auth.signup)
    router.post('/auth/signin', auth.signin)

}