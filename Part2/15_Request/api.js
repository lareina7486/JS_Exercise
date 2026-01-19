// 설문 응답 목록 조회 (GET)
export async function getSurveys(params = {}) {
  const url = new URL(
    "https://learn.codeit.kr/api/color-surveys"
  );

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("설문 응답을 찾을 수 없습니다.");
    } else if (response.status === 500) {
      throw new Error("서버 오류가 발생했습니다.");
    } else {
      throw new Error("데이터를 불러오는데 실패했습니다.");
    }
  }

  const data = await response.json();
  return data;
}

// 특정 설문 응답 조회
export async function getSurvey(id) {
  const response = await fetch(
    `https://learn.codeit.kr/api/color-surveys/${id}`
  );

  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }

  const data = await response.json();
  return data;
}

// 설문 응답 생성
export async function createSurvey(surveyData) {
  const response = await fetch(
    "https://learn.codeit.kr/api/color-surveys",
    {
      method: "POST",
      body: JSON.stringify(surveyData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("데이터를 생성하는데 실패했습니다.");
  }

  const data = await response.json();
  return data;
}