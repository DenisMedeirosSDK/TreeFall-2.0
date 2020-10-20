import path from 'path';
import multer from 'multer';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (_, file, callback) => {
      const filename = `${Date.now()}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
