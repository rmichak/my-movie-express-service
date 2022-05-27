import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db';

export const updateMovie = {
    path: '/api/movie/:id',
    method: 'put',
    handler: async (req, res) => {
        const { id } = req.params;
    
        const query = { "_id": ObjectId(id) };
        const db = getDbConnection('test1');

        const existingMovie = await db.collection('test1').findOne(query);

        if (existingMovie) {

            const result = await db.collection('test1').findOneAndUpdate(
                query,
                { $set: req.body }
            );

            const updatedDocument = await db.collection('test1').findOne(query);

            res.status(200).send(updatedDocument);
        } else {
            res.status(404).send('movie not found');
        }



    },
};