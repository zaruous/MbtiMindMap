import { PersonalityType } from "@shared/schema";

export const personalityTypes: PersonalityType[] = [
  {
    type: "ENFP",
    nickname: "재기발랄한 활동가",
    description: "창의적이고 열정적인 성격으로, 새로운 가능성을 탐구하는 것을 좋아합니다. 사람들과의 관계를 중시하며, 자유롭고 유연한 환경에서 최고의 능력을 발휘합니다.",
    strengths: ["뛰어난 의사소통 능력", "창의적 문제해결", "높은 적응력", "열정적인 동기부여"],
    careers: ["마케팅 전문가", "상담사/코치", "기획자/컨설턴트", "저널리스트"],
    color: "from-primary to-secondary"
  },
  {
    type: "INFP",
    nickname: "열정적인 중재자",
    description: "이상주의적이고 개인의 가치를 중시하는 성격입니다. 깊은 내적 세계를 가지고 있으며, 진정성 있는 관계와 의미 있는 일을 추구합니다.",
    strengths: ["강한 가치관", "창의적 사고", "공감 능력", "개별성 존중"],
    careers: ["작가/예술가", "심리상담사", "사회복지사", "연구원"],
    color: "from-green-500 to-emerald-500"
  },
  {
    type: "ENFJ",
    nickname: "카리스마 있는 선도자",
    description: "타인의 성장과 발전에 관심이 많은 리더형 성격입니다. 뛰어난 소통 능력으로 사람들을 이끌고 영감을 주는 것을 좋아합니다.",
    strengths: ["리더십", "소통 능력", "영감 제공", "팀워크"],
    careers: ["교육자", "HR 전문가", "정치인", "비영리단체 운영"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: "INFJ",
    nickname: "신비한 옹호자",
    description: "직관력이 뛰어나고 이상주의적인 성격입니다. 깊이 있는 통찰력을 가지고 있으며, 인류의 복지와 개선에 관심이 많습니다.",
    strengths: ["직관력", "통찰력", "이상주의", "결단력"],
    careers: ["작가", "상담사", "연구원", "종교인"],
    color: "from-purple-500 to-indigo-500"
  },
  {
    type: "ENTP",
    nickname: "논리적인 변론가",
    description: "혁신적이고 창의적인 아이디어를 좋아하는 성격입니다. 지적 호기심이 강하고 새로운 도전을 즐기며, 변화를 이끌어가는 것을 좋아합니다.",
    strengths: ["창의성", "논리적 사고", "적응력", "혁신성"],
    careers: ["기업가", "발명가", "변호사", "컨설턴트"],
    color: "from-orange-500 to-red-500"
  },
  {
    type: "INTP",
    nickname: "사색하는 논리술사",
    description: "논리적이고 분석적인 사고를 하는 성격입니다. 복잡한 문제를 해결하는 것을 즐기며, 독립적이고 객관적인 관점을 중시합니다.",
    strengths: ["논리적 분석", "독립성", "객관성", "문제해결"],
    careers: ["연구원", "프로그래머", "분석가", "학자"],
    color: "from-teal-500 to-green-500"
  },
  {
    type: "ENTJ",
    nickname: "대담한 통솔자",
    description: "목표 지향적이고 결단력 있는 리더형 성격입니다. 효율성을 중시하고 장기적인 계획을 세워 조직을 이끌어가는 능력이 뛰어납니다.",
    strengths: ["리더십", "전략적 사고", "결단력", "효율성"],
    careers: ["CEO/임원", "경영 컨설턴트", "프로젝트 매니저", "투자가"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    type: "INTJ",
    nickname: "전략적인 건축가",
    description: "독립적이고 결단력 있는 성격으로, 장기적인 비전을 가지고 체계적으로 목표를 달성해나갑니다. 전략적 사고와 혁신을 중시합니다.",
    strengths: ["전략적 계획", "독립성", "혁신", "체계성"],
    careers: ["전략 기획자", "건축가", "과학자", "시스템 분석가"],
    color: "from-slate-500 to-gray-600"
  },
  {
    type: "ESFP",
    nickname: "자유로운 영혼의 연예인",
    description: "활발하고 사교적인 성격으로, 순간을 즐기고 다른 사람들과 함께하는 것을 좋아합니다. spontaneous하고 유연한 태도를 가지고 있습니다.",
    strengths: ["사교성", "유연성", "낙천성", "실용성"],
    careers: ["연예인", "이벤트 기획자", "영업사원", "카운슬러"],
    color: "from-pink-500 to-rose-500"
  },
  {
    type: "ISFP",
    nickname: "유연한 모험가",
    description: "온화하고 친근한 성격으로, 예술적 감각과 개인적 가치를 중시합니다. 조용하지만 강한 내적 신념을 가지고 있습니다.",
    strengths: ["예술적 감각", "유연성", "친근함", "개별성"],
    careers: ["예술가", "디자이너", "상담사", "동물 훈련사"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    type: "ESFJ",
    nickname: "사교적인 집정관",
    description: "따뜻하고 친근한 성격으로, 다른 사람을 돕고 조화로운 환경을 만드는 것을 좋아합니다. 책임감이 강하고 전통을 중시합니다.",
    strengths: ["협력", "책임감", "친근함", "조직력"],
    careers: ["간호사", "교사", "사회복지사", "이벤트 코디네이터"],
    color: "from-red-500 to-pink-500"
  },
  {
    type: "ISFJ",
    nickname: "따뜻한 수호자",
    description: "조용하고 친근한 성격으로, 다른 사람을 보살피고 지지하는 것을 좋아합니다. 신뢰할 수 있고 성실한 태도를 가지고 있습니다.",
    strengths: ["배려심", "신뢰성", "성실함", "인내력"],
    careers: ["간병인", "교사", "상담사", "행정 업무"],
    color: "from-violet-500 to-purple-500"
  },
  {
    type: "ESTP",
    nickname: "모험을 즐기는 사업가",
    description: "활동적이고 현실적인 성격으로, 즉흥적이고 융통성 있는 접근을 좋아합니다. 실제 경험을 통해 배우며 문제를 해결합니다.",
    strengths: ["실용성", "적응력", "문제해결", "활동성"],
    careers: ["영업사원", "운동선수", "기업가", "응급 구조사"],
    color: "from-amber-500 to-yellow-500"
  },
  {
    type: "ISTP",
    nickname: "실용적인 만능재주꾼",
    description: "조용하고 분석적인 성격으로, 실용적인 문제해결을 즐깁니다. 독립적이고 융통성 있는 접근 방식을 선호합니다.",
    strengths: ["실용성", "분석력", "독립성", "기술력"],
    careers: ["엔지니어", "기술자", "수리공", "컴퓨터 프로그래머"],
    color: "from-lime-500 to-green-500"
  },
  {
    type: "ESTJ",
    nickname: "효율적인 경영자",
    description: "체계적이고 실용적인 성격으로, 조직과 절차를 중시합니다. 책임감이 강하고 목표 달성을 위해 체계적으로 접근합니다.",
    strengths: ["조직력", "체계성", "책임감", "현실성"],
    careers: ["관리자", "공무원", "은행원", "회계사"],
    color: "from-sky-500 to-blue-500"
  },
  {
    type: "ISTJ",
    nickname: "신뢰할 수 있는 현실주의자",
    description: "신중하고 성실한 성격으로, 전통과 규칙을 중시합니다. 책임감이 강하고 꾸준히 노력하여 목표를 달성합니다.",
    strengths: ["성실함", "신뢰성", "체계성", "인내력"],
    careers: ["회계사", "공무원", "은행원", "의료진"],
    color: "from-indigo-500 to-blue-500"
  }
];
