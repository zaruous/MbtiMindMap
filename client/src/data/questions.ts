import { MbtiQuestion } from "@shared/schema";

export const mbtiQuestions: MbtiQuestion[] = [
  {
    id: 1,
    text: "파티에서 새로운 사람들과 대화하는 것을 즐기시나요?",
    dimension: "EI",
    options: [
      { text: "매우 그렇다", value: "E", weight: 2 },
      { text: "그렇다", value: "E", weight: 1 },
      { text: "그렇지 않다", value: "I", weight: 1 },
      { text: "전혀 그렇지 않다", value: "I", weight: 2 }
    ]
  },
  {
    id: 2,
    text: "혼자만의 시간을 가지며 에너지를 충전하는 편인가요?",
    dimension: "EI",
    options: [
      { text: "매우 그렇다", value: "I", weight: 2 },
      { text: "그렇다", value: "I", weight: 1 },
      { text: "그렇지 않다", value: "E", weight: 1 },
      { text: "전혀 그렇지 않다", value: "E", weight: 2 }
    ]
  },
  {
    id: 3,
    text: "구체적인 사실과 세부사항에 집중하는 편인가요?",
    dimension: "SN",
    options: [
      { text: "매우 그렇다", value: "S", weight: 2 },
      { text: "그렇다", value: "S", weight: 1 },
      { text: "그렇지 않다", value: "N", weight: 1 },
      { text: "전혀 그렇지 않다", value: "N", weight: 2 }
    ]
  },
  {
    id: 4,
    text: "미래의 가능성과 새로운 아이디어에 관심이 많은가요?",
    dimension: "SN",
    options: [
      { text: "매우 그렇다", value: "N", weight: 2 },
      { text: "그렇다", value: "N", weight: 1 },
      { text: "그렇지 않다", value: "S", weight: 1 },
      { text: "전혀 그렇지 않다", value: "S", weight: 2 }
    ]
  },
  {
    id: 5,
    text: "결정을 내릴 때 논리적 분석을 우선시하나요?",
    dimension: "TF",
    options: [
      { text: "매우 그렇다", value: "T", weight: 2 },
      { text: "그렇다", value: "T", weight: 1 },
      { text: "그렇지 않다", value: "F", weight: 1 },
      { text: "전혀 그렇지 않다", value: "F", weight: 2 }
    ]
  },
  {
    id: 6,
    text: "다른 사람의 감정과 가치를 중요하게 고려하나요?",
    dimension: "TF",
    options: [
      { text: "매우 그렇다", value: "F", weight: 2 },
      { text: "그렇다", value: "F", weight: 1 },
      { text: "그렇지 않다", value: "T", weight: 1 },
      { text: "전혀 그렇지 않다", value: "T", weight: 2 }
    ]
  },
  {
    id: 7,
    text: "계획을 세워서 일을 진행하는 것을 선호하나요?",
    dimension: "JP",
    options: [
      { text: "매우 그렇다", value: "J", weight: 2 },
      { text: "그렇다", value: "J", weight: 1 },
      { text: "그렇지 않다", value: "P", weight: 1 },
      { text: "전혀 그렇지 않다", value: "P", weight: 2 }
    ]
  },
  {
    id: 8,
    text: "유연하고 즉흥적인 상황을 즐기시나요?",
    dimension: "JP",
    options: [
      { text: "매우 그렇다", value: "P", weight: 2 },
      { text: "그렇다", value: "P", weight: 1 },
      { text: "그렇지 않다", value: "J", weight: 1 },
      { text: "전혀 그렇지 않다", value: "J", weight: 2 }
    ]
  },
  {
    id: 9,
    text: "대화할 때 말하면서 생각을 정리하는 편인가요?",
    dimension: "EI",
    options: [
      { text: "매우 그렇다", value: "E", weight: 2 },
      { text: "그렇다", value: "E", weight: 1 },
      { text: "그렇지 않다", value: "I", weight: 1 },
      { text: "전혀 그렇지 않다", value: "I", weight: 2 }
    ]
  },
  {
    id: 10,
    text: "신중하게 생각한 후에 말하는 편인가요?",
    dimension: "EI",
    options: [
      { text: "매우 그렇다", value: "I", weight: 2 },
      { text: "그렇다", value: "I", weight: 1 },
      { text: "그렇지 않다", value: "E", weight: 1 },
      { text: "전혀 그렇지 않다", value: "E", weight: 2 }
    ]
  },
  {
    id: 11,
    text: "실용적이고 현실적인 해결책을 선호하나요?",
    dimension: "SN",
    options: [
      { text: "매우 그렇다", value: "S", weight: 2 },
      { text: "그렇다", value: "S", weight: 1 },
      { text: "그렇지 않다", value: "N", weight: 1 },
      { text: "전혀 그렇지 않다", value: "N", weight: 2 }
    ]
  },
  {
    id: 12,
    text: "창의적이고 혁신적인 접근을 좋아하나요?",
    dimension: "SN",
    options: [
      { text: "매우 그렇다", value: "N", weight: 2 },
      { text: "그렇다", value: "N", weight: 1 },
      { text: "그렇지 않다", value: "S", weight: 1 },
      { text: "전혀 그렇지 않다", value: "S", weight: 2 }
    ]
  },
  {
    id: 13,
    text: "객관적이고 공정한 판단을 중시하나요?",
    dimension: "TF",
    options: [
      { text: "매우 그렇다", value: "T", weight: 2 },
      { text: "그렇다", value: "T", weight: 1 },
      { text: "그렇지 않다", value: "F", weight: 1 },
      { text: "전혀 그렇지 않다", value: "F", weight: 2 }
    ]
  },
  {
    id: 14,
    text: "조화롭고 협력적인 분위기를 만들려고 노력하나요?",
    dimension: "TF",
    options: [
      { text: "매우 그렇다", value: "F", weight: 2 },
      { text: "그렇다", value: "F", weight: 1 },
      { text: "그렇지 않다", value: "T", weight: 1 },
      { text: "전혀 그렇지 않다", value: "T", weight: 2 }
    ]
  },
  {
    id: 15,
    text: "마감일과 일정을 철저히 지키려고 하나요?",
    dimension: "JP",
    options: [
      { text: "매우 그렇다", value: "J", weight: 2 },
      { text: "그렇다", value: "J", weight: 1 },
      { text: "그렇지 않다", value: "P", weight: 1 },
      { text: "전혀 그렇지 않다", value: "P", weight: 2 }
    ]
  },
  {
    id: 16,
    text: "상황에 따라 유연하게 대응하는 것을 선호하나요?",
    dimension: "JP",
    options: [
      { text: "매우 그렇다", value: "P", weight: 2 },
      { text: "그렇다", value: "P", weight: 1 },
      { text: "그렇지 않다", value: "J", weight: 1 },
      { text: "전혀 그렇지 않다", value: "J", weight: 2 }
    ]
  }
];
