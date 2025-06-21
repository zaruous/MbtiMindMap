import { Trophy, Star, Briefcase, RotateCcw, Share } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { personalityTypes } from "@/data/personality-types";
import { MbtiResult } from "@shared/schema";

interface ResultSectionProps {
  result: MbtiResult;
  onRestart: () => void;
}

export default function ResultSection({ result, onRestart }: ResultSectionProps) {
  const personalityType = personalityTypes.find(type => type.type === result.type);
  
  if (!personalityType) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  const dimensionLabels = {
    EI: result.percentages.EI >= 50 ? "외향성 (E)" : "내향성 (I)",
    SN: result.percentages.SN >= 50 ? "감각 (S)" : "직관 (N)",
    TF: result.percentages.TF >= 50 ? "사고 (T)" : "감정 (F)",
    JP: result.percentages.JP >= 50 ? "판단 (J)" : "인식 (P)"
  };

  const dimensionColors = ["bg-primary", "bg-secondary", "bg-accent", "bg-green-500"];

  return (
    <section>
      {/* Result Header */}
      <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-slate-200">
        <CardContent className="text-center pt-0">
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <Trophy className="text-3xl text-white w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">검사 완료!</h2>
          <p className="text-slate-600 text-lg">당신의 성격유형을 확인해보세요</p>
        </CardContent>
      </Card>

      {/* Main Result Card */}
      <Card className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white text-center">
          <h3 className="text-5xl font-bold mb-2">{personalityType.type}</h3>
          <p className="text-xl opacity-90">{personalityType.nickname}</p>
        </div>
        
        <CardContent className="p-8">
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-slate-800 mb-4">성격 특징</h4>
            <p className="text-slate-600 leading-relaxed">
              {personalityType.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                <Star className="text-accent mr-2 w-5 h-5" />
                주요 강점
              </h5>
              <ul className="space-y-2 text-slate-600">
                {personalityType.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-3 flex items-center">
                <Briefcase className="text-secondary mr-2 w-5 h-5" />
                추천 직업
              </h5>
              <ul className="space-y-2 text-slate-600">
                {personalityType.careers.map((career, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personality Dimensions */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h5 className="font-semibold text-slate-800 mb-4">성격 차원 분석</h5>
            <div className="space-y-4">
              {Object.entries(dimensionLabels).map(([key, label], index) => {
                const percentage = result.percentages[key as keyof typeof result.percentages];
                return (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-slate-600 min-w-0 flex-shrink-0">{label}</span>
                    <div className="flex-1 mx-4">
                      <Progress 
                        value={percentage} 
                        className="h-2"
                      />
                    </div>
                    <span className="text-slate-600 text-sm min-w-0 flex-shrink-0">{percentage}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onRestart}
          variant="secondary"
          className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl"
        >
          <RotateCcw className="mr-2 w-4 h-4" />
          다시 테스트하기
        </Button>
        <Button 
          variant="secondary"
          className="bg-secondary hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-xl"
        >
          <Share className="mr-2 w-4 h-4" />
          결과 공유하기
        </Button>
      </div>
    </section>
  );
}
