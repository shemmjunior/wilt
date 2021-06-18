module.exports = (router) => {
        const wilt = require('./index')

        router.post('/wilt', wilt.create)
        router.get('/wilt', wilt.index)
        router.get('/wilt/:id', wilt.findOne)
        router.put('/wilt/:id', wilt.update)
        router.delete('/wilt/:id', wilt.delete)

        router.get('/user/wilts', wilt.userWilts)

}