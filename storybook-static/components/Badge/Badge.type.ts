import { ReactNode } from "react";

export enum BadgeStatus {
  Sent = "Sent", // 검사 대기
  Progress = "Progress", // 검사 중
  Complete = "Complete", // 검사 완료
  Unfinished = "Unfinished", // 미검사
}

export enum BadgeRole {
  Director = "Director", // 의사(마스터)
  Doctor = "Doctor", // 의사
  Nurse = "Nurse", // 간호사
}

export type BadgeLevel = 1 | 2 | 3 | 4 | 5 | 6;

export enum BadgeSearch {
  Group = "Group", // 묶음처방
  Level = "Level", // 레벨
  Abbreviations = "Abbreviations", // 약자
  Korean = "Korean", // 한글
}

export type BasicBadgeProps = { children?: ReactNode };
export type StatusBadgeProps = {
  status: BadgeStatus;
};
export type RoleBadgeProps = { role: BadgeRole };
export type LevelBadgeProps = { level: BadgeLevel };
export type SearchBadgeProps = {
  search: BadgeSearch;
};
