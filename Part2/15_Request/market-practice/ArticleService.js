const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 공통 응답 처리
function handleResponse(response) {
}

// 게시글 목록 조회
export function getArticleList({ page = 1, pageSize = 10, keyword = '' } = {}) {
    
}

// 게시글 단일 조회
export function getArticle(articleId) {
}

// 게시글 생성
export function createArticle({ title, content, image }) {
}

// 게시글 수정
export function patchArticle(articleId, payload) {
}

// 게시글 삭제
export function deleteArticle(articleId) {
}
