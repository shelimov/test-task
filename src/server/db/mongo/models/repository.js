import mongoose from 'mongoose';

const RepositorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  author: String,
  type: Number
});
export default mongoose.model('Repository', RepositorySchema);