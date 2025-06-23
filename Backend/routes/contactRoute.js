import express from 'express';
import userContact from '../controllers/contactController.js';


const contactRouter = express.Router();

contactRouter.post('/message', userContact);

export default contactRouter;