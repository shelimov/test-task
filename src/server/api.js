import express from 'express';
import Repository from './db/mongo/models/repository';
import Promise from 'bluebird';
const router = express.Router();

function get(offset, limit, filter = {}) {
  return Repository.find(filter, { _id: 0, id: 1, author: 1, type: 1, name: 1 }).skip(offset).limit(limit).exec();
}

router.get('/reps/:page?', ({query, params}, res) => {
  const
    { limit = 20 } = query,
    { page = 1 } = params,
    offset = (page - 1) * limit;
  let
    list = get(offset, limit),
    count = Repository.count().exec(); 

  Promise.all([list, count]).then(([list, count]) => {
    res.json({list, count});
  });
});

router.get('/search/:page?', ({query, params}, res) => {
  if (!query.by || !query.q)
    return res.json({error: 'by and text is not specified'});
  
  const
    { limit = 20, by, q } = query,
    { page = 1 } = params,
    offset = (page - 1) * limit,
    re = new RegExp(q, 'i');
  let
    list = get(offset, limit, { [by]: re }),
    count = Repository.count({[by]: re}).exec();

  Promise.all([list, count]).then(([list, count]) => {
    res.json({list, count});
  });
});

router.post('/rep', ({body}, res) => {
  const { id, type } = body;
  if (!id || !type)
    res.json({error: 'id and type is not specifed'});
  
  Repository.findOneAndUpdate({id}, {type}).exec().then(response => {
    res.json(response);
  });
});
export default router;