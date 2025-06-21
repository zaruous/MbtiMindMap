import { Brain, Clock, HelpCircle, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WelcomeSectionProps {
  onStartTest: () => void;
}

export default function WelcomeSection({ onStartTest }: WelcomeSectionProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
      <CardContent className="pt-0">
        <div className="text-center mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Brain className="text-4xl text-white w-16 h-16" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">MBTI 성격유형 검사</h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
            16가지 성격유형 중 나만의 특별한 성격을 찾아보세요. 
            솔직하게 답변해주시면 더 정확한 결과를 얻을 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <Clock className="text-secondary text-xl mr-3 w-5 h-5" />
              <h3 className="font-semibold text-slate-800">소요 시간</h3>
            </div>
            <p className="text-slate-600">약 5-10분</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <HelpCircle className="text-secondary text-xl mr-3 w-5 h-5" />
              <h3 className="font-semibold text-slate-800">질문 수</h3>
            </div>
            <p className="text-slate-600">총 16문항</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={onStartTest}
            className="bg-primary hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            size="lg"
          >
            <Play className="mr-2 w-5 h-5" />
            테스트 시작하기
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
