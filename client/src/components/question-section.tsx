import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { mbtiQuestions } from "@/data/questions";
import { calculateMbtiResult } from "@/lib/mbti-calculator";
import { MbtiAnswer, MbtiResult } from "@shared/schema";

interface QuestionSectionProps {
  answers: MbtiAnswer[];
  onAnswerUpdate: (answers: MbtiAnswer[]) => void;
  onComplete: (result: MbtiResult) => void;
}

export default function QuestionSection({ answers, onAnswerUpdate, onComplete }: QuestionSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = mbtiQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / mbtiQuestions.length) * 100;

  const handleAnswerSelect = (value: string, weight: number) => {
    const newAnswer: MbtiAnswer = {
      questionId: currentQuestion.id,
      value,
      weight,
      dimension: currentQuestion.dimension
    };

    const updatedAnswers = [...answers, newAnswer];
    onAnswerUpdate(updatedAnswers);

    setTimeout(() => {
      if (currentQuestionIndex < mbtiQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Test complete, calculate result
        const result = calculateMbtiResult(updatedAnswers);
        onComplete(result);
      }
    }, 300);
  };

  return (
    <section>
      {/* Progress Bar */}
      <Card className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-slate-200">
        <CardContent className="pt-0">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-slate-600">진행률</span>
            <span className="text-sm font-medium text-primary">
              {currentQuestionIndex + 1} / {mbtiQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="h-3" />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="bg-white rounded-2xl shadow-lg border border-slate-200">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-slate-800 leading-relaxed">
              {currentQuestion.text}
            </h3>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerSelect(option.value, option.weight)}
                variant="ghost"
                className="w-full p-4 text-left bg-slate-50 hover:bg-primary hover:text-white rounded-xl transition-colors duration-200 border border-slate-200 hover:border-primary h-auto justify-start group"
              >
                <div className="flex items-center w-full">
                  <span className="font-medium">{option.text}</span>
                  <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity w-4 h-4" />
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
