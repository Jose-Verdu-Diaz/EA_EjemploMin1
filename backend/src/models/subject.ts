import mongoose, { Schema, Document} from 'mongoose';
import Student, { IStudent } from './student';

export interface ISubject extends Document {
    name: string;
    students: IStudent['_id'];
}

const subjectSchema = new Schema({
    name: {
        type: String,
        unique: true,
        index: true
    },
    students: [{
        type: Schema.Types.ObjectId,
        ref: Student
    }]
});

export default mongoose.model<ISubject>('Subject', subjectSchema);