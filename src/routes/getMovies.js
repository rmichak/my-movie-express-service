import { getDbConnection } from '../db';

export const getMovies = {
    path: '/api/movie',
    method: 'get',
    handler: async (req, res) => {
        //console.log(req.body)
        //const {title} = req.body;
        //console.log(title);

        const db = getDbConnection('test1');
        const result = await db.collection('test1').find().toArray();
        console.log(result)

        res.status(200).send(result);


    },
};