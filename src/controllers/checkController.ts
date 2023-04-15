import { Request, Response } from 'express';
import wp from '../config/wpConfig.js';

const optional = {
    lang: 'pt'
  };

export async function checkText (req: Request, res: Response) {
    const text = req.query.text;
    try {
        const result = await wp.check(text, optional);
        res.json({ containsProfanity: result });    
    } catch (error) {
        res.status(500).send(error);
    }
  };