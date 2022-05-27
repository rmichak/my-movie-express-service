import { getDbConnection } from '../db';

export const postMovie = {
    path: '/api/movie',
    method: 'post',
    handler: async (req, res) => {
        //console.log(req.body)
        //const {title} = req.body;
        //console.log(title);

        const db = getDbConnection('test1');
        const result = await db.collection('test1').insertOne(req.body);
        console.log(result)

        res.status(200).send(result.insertedId);


    },
};