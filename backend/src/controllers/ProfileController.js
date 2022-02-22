const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const consultor_id = request.headers.authorization;

        const clients = await connection('clients')
        .where('consultor_id', consultor_id)
        .select('*');

        return response.json(clients);
        
    }
}