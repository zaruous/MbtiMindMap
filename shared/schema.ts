import { z } from "zod";

// MBTI Test Answer Schema
export const mbtiAnswerSchema = z.object({
  questionId: z.number(),
  value: z.string(),
  weight: z.number(),
  dimension: z.enum(["EI", "SN", "TF", "JP"])
});

export const mbtiResultSchema = z.object({
  type: z.string().length(4),
  scores: z.object({
    E: z.number(),
    I: z.number(),
    S: z.number(),
    N: z.number(),
    T: z.number(),
    F: z.number(),
    J: z.number(),
    P: z.number()
  }),
  percentages: z.object({
    EI: z.number(),
    SN: z.number(),
    TF: z.number(),
    JP: z.number()
  })
});

export type MbtiAnswer = z.infer<typeof mbtiAnswerSchema>;
export type MbtiResult = z.infer<typeof mbtiResultSchema>;

export interface MbtiQuestion {
  id: number;
  text: string;
  dimension: "EI" | "SN" | "TF" | "JP";
  options: {
    text: string;
    value: string;
    weight: number;
  }[];
}

export interface PersonalityType {
  type: string;
  nickname: string;
  description: string;
  strengths: string[];
  careers: string[];
  color: string;
}
