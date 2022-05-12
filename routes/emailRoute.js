const Mailer = require('../services/sendEmail')

module.exports = (app) => {
    app.post('/api/sendemail', async (req, res) => {
        // console.log('body:', req.body)
        const mailer = new Mailer(req.body)
        try {
            const response = await mailer.sendEmail()
            if (response[0].statusCode === 202){
                res.send(true)
            }
            else{
                // console.log('response mailer:', response)
                throw new Error(response);
            }                
        } catch (error) {
            console.error('Error in sendemail route', error)
            res.send(false)
        }
            }
        )
    }
    
