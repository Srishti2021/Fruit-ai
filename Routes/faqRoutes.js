const  express = require('express')
const { register_faq, get_all_faq, get_faq_by_id, update_the_faq, delete_faq } = require('../Controller/faqController')
const router = express.Router()

router.post('/faqs', register_faq)
router.get('/faqs', get_all_faq)
router.get('/faqs/:id',get_faq_by_id )
router.put('/faqs/:id', update_the_faq)
router.delete('/faqs/:id', delete_faq)

module.exports = router