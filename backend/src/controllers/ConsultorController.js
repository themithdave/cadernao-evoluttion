const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index( request, response ) {
        const consultors = await connection('consultors').select('*');
    
        return response.json(consultors); 
    },

    async create(request, response) {
        const {name, email} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('consultors').insert({
            id,
            name,
            email,
        })
    
        return response.json({ id }); 
    }
};