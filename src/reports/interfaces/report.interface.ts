import { Document } from 'mongoose';

export interface Report extends Document {
  readonly time: number;
  readonly type: string;
  readonly projref: string;
}
