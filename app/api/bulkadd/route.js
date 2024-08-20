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
  try {
    await connectDB();
    const { questions, sources } = await req.json();

    if (!Array.isArray(questions) || !Array.isArray(sources) || questions.length !== sources.length) {
      console.log(questions.length)
      console.log(sources.length)
      return NextResponse.json({ error: 'Invalid input data' }, { status: 400 });
    }

    const results = [];
    for (let i = 0; i < questions.length; i++) {
      const questionData = {
        question: questions[i],
        source: sources[i],
      };
      try {
        const result = await Question.create(questionData);
        results.push({ success: true, data: result });
      } catch (error) {
        if (error.code === 11000) { // Duplicate key error
          results.push({ success: false, error: 'Duplicate question', question: questionData.question });
        } else {
          results.push({ success: false, error: error.message, question: questionData.question });
        }
      }
    }

    return NextResponse.json({ message: 'Questions processed', results }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
