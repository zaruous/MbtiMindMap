import { useState } from "react";
import { Brain } from "lucide-react";
import WelcomeSection from "@/components/welcome-section";
import QuestionSection from "@/components/question-section";
import ResultSection from "@/components/result-section";
import PersonalityTypesGrid from "@/components/personality-types-grid";
import { MbtiAnswer, MbtiResult } from "@shared/schema";

export default function Home() {
  const [currentView, setCurrentView] = useState<"welcome" | "questions" | "results">("welcome");
  const [answers, setAnswers] = useState<MbtiAnswer[]>([]);
  const [result, setResult] = useState<MbtiResult | null>(null);

  const handleStartTest = () => {
    setCurrentView("questions");
    setAnswers([]);
    setResult(null);
  };

  const handleTestComplete = (testResult: MbtiResult) => {
    setResult(testResult);
    setCurrentView("results");
  };

  const handleRestartTest = () => {
    setCurrentView("welcome");
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary">MBTI 심리테스트</h1>
            <p className="text-slate-600 mt-2">나의 진짜 성격유형을 발견해보세요</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {currentView === "welcome" && (
          <>
            <WelcomeSection onStartTest={handleStartTest} />
            <PersonalityTypesGrid />
          </>
        )}

        {currentView === "questions" && (
          <QuestionSection
            answers={answers}
            onAnswerUpdate={setAnswers}
            onComplete={handleTestComplete}
          />
        )}

        {currentView === "results" && result && (
          <>
            <ResultSection result={result} onRestart={handleRestartTest} />
            <PersonalityTypesGrid />
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center text-slate-600">
            <p className="mb-2">© 2024 MBTI 심리테스트. 모든 권리 보유.</p>
            <p className="text-sm">이 테스트는 재미와 자기 이해를 위한 것으로, 전문적인 심리 진단을 대체하지 않습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
