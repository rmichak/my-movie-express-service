import { ObjectId } from 'mongodb';
import { getDbConnection } from '../db';

export const getMovie = {
    path: '/api/movie/:id',
    method: 'get',
    handler: async (req, res) => {
        const { id } = req.params;
        console.log(id);

        const query = { "_id": ObjectId(id) };
        const db = getDbConnection('test1');
        const result = await db.collection('test1').findOne(query);

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).send("movie not found");
        }




    },
};