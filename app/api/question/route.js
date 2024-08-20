import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { connectDB } from '@/libs/mongodb';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  source: {
    type: String,
  },
});

const Question = mongoose.models.Question || mongoose.model('Question', QuestionSchema);

export async function POST(req) {
  await connectDB();
  console.log("Connected to MongoDB");
  const { question, source } = await req.json();
  try {
    const questionInfo = new Question({ question, source });
    await questionInfo.save();
    return NextResponse.json({ success: true, data: questionInfo }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET(req) {
  await connectDB();
  try {
    const count = await Question.countDocuments();
    const random = Math.floor(Math.random() * count);
    const question = await Question.findOne().skip(random);
    return NextResponse.json({ success: true, data: question });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}