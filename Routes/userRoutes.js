const  express = require('express')
const { register_user, login_user } = require('../Controller/userController')
const router = express.Router()

router.post('/register/user', register_user)
router.post('/login/user', login_user)
module.exports = router
