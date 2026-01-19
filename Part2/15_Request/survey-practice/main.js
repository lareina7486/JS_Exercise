import {
  getSurveys,
  getSurvey,
  createSurvey,
} from "./api.js";

// 설문 응답 목록 조회
try {
  const surveys = await getSurveys({
    offset: 0,
    limit: 10,
  });
  console.log(surveys);
} catch (error) {
  console.log("오류:", error.message);
}

// 특정 설문 응답 조회
try {
  const survey = await getSurvey(42);
  console.log(survey);
} catch (error) {
  console.log("오류:", error.message);
}

// 설문 응답 생성
try {
  const surveyData = {
    mbti: "ENFP",
    colorCode: "#CA6952",
    password: "1234",
  };
  const newSurvey = await createSurvey(surveyData);
  console.log("설문 응답 생성 성공:", newSurvey);
} catch (error) {
  console.log("오류:", error.message);
}