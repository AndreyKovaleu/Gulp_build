import { deleteAsync } from 'del';

const reset = () => {
  return deleteAsync(app.path.clean);
}

// Удаление папки .publish после отправки на GitHub pages
const resetPublish = () => {
  return deleteAsync(app.path.cleanPublish);
}

export { reset, resetPublish };