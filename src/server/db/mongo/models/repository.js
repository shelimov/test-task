import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
  id: String,
  name: String,
  author: String,
  type: String
});
export default mongoose.model('Repository', RepositorySchema);