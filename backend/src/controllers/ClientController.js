const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const clients = await connection('clients').select('*');

        return response.json(clients);
    },

    async create(request, response) {
        const { name, cpf, telefone, beneficio, descript } = request.body;
        const consultor_id = request.headers.authorization;

        const [id] = await connection('clients').insert({
            name,
            cpf,
            telefone,
            beneficio,
            descript,
            consultor_id,
        });
        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;
        const consultor_id = request.headers.authorization;

        const client = await connection('clients')
        .where('id', id)
        .select('consultor_id')
        .first();

        if(client.consultor_id != consultor_id) {
            return response.status(401).json({ error: 'Operation not permited' });
        }
        await connection('clients').where('id', id).delete();

        return response.status(204).send();
    }
};