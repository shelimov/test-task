import express from 'express';
const router = express.Router();

router.get('/reps/:page?', (req, res) => {
  const
    count = req.query.count || 20,
    page = req.params.page || 1,
    offset = (page - 1) * count;

  res.json({})
});

router.get('/search/:page?', (req, res) => {
  if (!req.query.by)
    return res.json({error: '"by" GET is required'});
  
  const
    count = req.query.count || 20,
    by = req.query.by,
    page = req.params.page || 1,
    offset = (page - 1) * count;
});

router.post('/rep', (req, res) => {
  const { body } = req;
  const { id, type } = body;
  if (!id || !type)
    res.json({error: 'id and type is not specifed'});
  res.json(body);
});
export default router;