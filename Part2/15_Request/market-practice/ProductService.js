const BASE_URL = 'https://panda-market-api-crud.vercel.app';

// 공통 요청 처리 (더 고민해보기)
async function request(url, options = {}) {
  try {
    const res = await fetch(url, options);  // fetch(url, {}): GET

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({}));
      const err = new Error(errorBody.message || `API Error: ${res.status} ${res.statusText}`);
      err.status = res.status;
      err.info = errorBody;
      throw err;
    }

    // DELETE는 응답 바디 없으므로 예외처리
    if (res.status === 204) return null;
    
    return await res.json();

  } catch (err) {
    console.error(`[API Error] ${options.method || 'GET'} ${url}:`, err);
    throw err;
  }
}

// 상품 목록 조회
export async function getProductList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  const url = new URL(`${BASE_URL}/products`);
  url.searchParams.set('page', page);
  url.searchParams.set('pageSize', pageSize);
  if (keyword) url.searchParams.set('keyword', keyword);

  return request(url.toString());
  // try {
  //   const res = await fetch(url);
  //   if (!res.ok) {
  //     const err = new Error(`Product API Error: ${res.status} ${res.statusText}`);
  //     err.status = res.status;
  //     throw err;
  //   }
  //   return await res.json();
  // } catch (err) {
  //   console.error('getProductList Error:', err);
  //   throw err;
  // }
}

// 상품 단일 조회
export async function getProduct(productId) {
  return request(`${BASE_URL}/products/${productId}`);

  // try {
  //   const res = await fetch(`${BASE_URL}/products/${productId}`);
  //   if (!res.ok) {
  //     const err = new Error(`Product API Error: ${res.status} ${res.statusText}`);
  //     err.status = res.status;
  //     throw err;
  //   }
  //   return await res.json();
  // } catch (err) {
  //   console.error('getProduct Error:', err);
  //   throw err;
  // }
}

// 상품 생성
export async function createProduct({ name, description, price, tags, images }) {
  return request(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  // try {
  //   const res = await fetch(`${BASE_URL}/products`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ name, description, price, tags, images }),
  //   });
  //   if (!res.ok) {
  //     const err = new Error(`Product API Error: ${res.status} ${res.statusText}`);
  //     err.status = res.status;
  //     throw err;
  //   }
  //   return await res.json();
  // } catch (err) {
  //   console.error('createProduct Error:', err);
  //   throw err;
  // }
}

// 상품 수정
export async function patchProduct(productId, payload) {
  return request(`${BASE_URL}/products/${productId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  // try {
  //   const res = await fetch(`${BASE_URL}/products/${productId}`, {
  //     method: 'PATCH',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(payload),
  //   });
  //   if (!res.ok) {
  //     const err = new Error(`Product API Error: ${res.status} ${res.statusText}`);
  //     err.status = res.status;
  //     throw err;
  //   }
  //   return await res.json();
  // } catch (err) {
  //   console.error('patchProduct Error:', err);
  //   throw err;
  // }
}

// 상품 삭제
export async function deleteProduct(productId) {
  return request(`${BASE_URL}/products/${productId}`, {
    method: 'DELETE',
  });

  // try {
  //   const res = await fetch(`${BASE_URL}/products/${productId}`, {
  //     method: 'DELETE',
  //   });
  //   if (!res.ok) {
  //     const err = new Error(`Product API Error: ${res.status} ${res.statusText}`);
  //     err.status = res.status;
  //     throw err;
  //   }
  //   return await res.json();
  // } catch (err) {
  //   console.error('deleteProduct Error:', err);
  //   throw err;
  // }
}