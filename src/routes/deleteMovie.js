import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db';

export const deleteMovie = {
    path: '/api/movie/:id',
    method: 'delete',
    handler: async (req, res) => {
        const { id } = req.params;
        console.log(id);

        const query = { "_id": ObjectId(id) };
        const db = getDbConnection('test1');
        const existingMovie = await db.collection('test1').findOne(query);

        if (existingMovie) {
            const result = await db.collection('test1').deleteOne(query);
            res.status(200).send('movie deleted');

        } else {
            res.status(404).send('movie not found');

        }



    },
};