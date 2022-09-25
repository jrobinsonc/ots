import type { NextApiRequest, NextApiResponse } from 'next';
import db from 'src/utils/db';
import type { GenericResponseOutput } from 'src/types';

export interface ResponseData {
  id: string;
}

export type ResponseOutput = GenericResponseOutput<ResponseData>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseOutput>,
): Promise<void> {
  try {
    const { secret } = req.body;
    const { id } = await db.collection('secrets').add({
      secret,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ data: { id }, error: null });
  } catch (e) {
    console.log(e);
    res
      .status(400)
      .json({ data: null, error: 'There was an error, please try later.' });
  }
}
