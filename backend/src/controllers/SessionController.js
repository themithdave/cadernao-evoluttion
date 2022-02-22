const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const consultor = await connection('consultors')
        .where('id', id)
        .select('name')
        .first();

        if (!consultor) {
            return response.status(400).json({ error: 'No Consultor found with this ID' });
        }
        return response.json(consultor); 
    }
}