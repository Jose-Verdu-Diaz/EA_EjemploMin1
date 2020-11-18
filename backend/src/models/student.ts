import { model, Schema, Document } from 'mongoose';
import Phone, {IPhone} from "./phone";

export interface IStudent extends Document {
    name: string;
    address: string;
    phones: Array<IPhone>;
}

const studentSchema = new Schema({
    name:{type: String},
    address:{type: String},
    phones:{
        type: Array,
        ref: Phone
    }
});

export default model<IStudent>('Student', studentSchema);