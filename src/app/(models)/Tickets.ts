import mongoose, { Document, Schema } from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables.");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

interface ITicket extends Document {
  title: string;
  description: string;
  category: string;
  progress: number;
  status: string;
  active: boolean;
}

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    progress: Number,
    status: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model<ITicket>("Ticket", ticketSchema);

export default Ticket;
