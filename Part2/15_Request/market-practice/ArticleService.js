const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 공통 응답 처리
function request(url, options = {}) {
  return fetch(url, options)
    .then(res => {
      if (!res.ok) {
        const err = new Error(`API Error: ${res.status} ${res.statusText}`);
        err.status = res.status;
        throw err;
      }
      
      if (res.status === 204) return null;
      return res.json();
    })
    .catch(err => {
      console.error(`API Call Failed (${options.method || 'GET'} ${url}):`, err);
      throw err;
    });
}

// 게시글 목록 조회
export function getArticleList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  const url = new URL(`${BASE_URL}/articles`);
  url.searchParams.set('page', page);
  url.searchParams.set('pageSize', pageSize);
  if (keyword) url.searchParams.set('keyword', keyword);

  return request(url.toString());

  // return fetch(url, { method: 'GET' })
  //   .then(handleResponse)
  //   .then(res => res.json())
  //   .catch(err => {
  //     console.error('getArticleList Error:', err);
  //     throw err;
  //   });
}

// 게시글 단일 조회
export function getArticle(articleId) {
  return request(`${BASE_URL}/articles/${articleId}`);
}

export function createArticle({ title, content, image }) {
  return request(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  });
}
    // .then(handleResponse)
    // .then(res => res.json())
    // .catch(err => {
    //   console.error('createArticle Error:', err);
    //   throw err;
    // });

// 게시글 수정
export function patchArticle(articleId, payload) {
  return request(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
    // .then(handleResponse)
    // .then(res => res.json())
    // .catch(err => {
    //   console.error('patchArticle Error:', err);
    //   throw err;
    // });
}

// 게시글 삭제
export function deleteArticle(articleId) {
    return request(`${BASE_URL}/articles/${articleId}`, { method: 'DELETE' });
}
