module.exports = (router) => {
    const profile = require('./index')

    router.get('/profile', profile.findOne)
    router.put('/profile', profile.update)


}