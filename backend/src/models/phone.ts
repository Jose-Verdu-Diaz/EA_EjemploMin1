import mongoose, { Schema, Document} from 'mongoose';

export interface IPhone extends Document {
    key: string;
    value: string;
}

const phoneSchema = new Schema({
    key: {type: String},
    value: {ype: String}
});

export default mongoose.model<IPhone>('Phone', phoneSchema);