import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.js';

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './ProductService.js';

async function run() {
  try {
    console.log('==============================');
    console.log('📌 Article API 테스트');
    console.log('==============================');

    // 1. 게시글 목록
    const articles = await getArticleList({ page: 1, pageSize: 5 });
    console.log('Article List:', articles);

    const articleId = articles?.list?.[0]?.id;
    if (!articleId) {
      console.log('❌ 테스트할 게시글 없음');
    } else {
      // 2. 게시글 단일 조회
      const article = await getArticle(articleId);
      console.log('Article Detail:', article);

      // 3. 게시글 수정
      const updatedArticle = await patchArticle(articleId, {
        title: '수정된 제목',
      });
      console.log('Article Updated:', updatedArticle);

      // 4. 게시글 삭제 (원하면 주석 해제)
      // await deleteArticle(articleId);
      // console.log('Article Deleted');
    }

    console.log('\n==============================');
    console.log('📌 Product API 테스트');
    console.log('==============================');

    // 1. 상품 목록
    const products = await getProductList({ page: 1, pageSize: 5 });
    console.log('Product List:', products);

    const productId = products?.list?.[0]?.id;
    if (!productId) {
      console.log('❌ 테스트할 상품 없음');
    } else {
      // 2. 상품 단일 조회
      const product = await getProduct(productId);
      console.log('Product Detail:', product);

      // 3. 상품 수정
      const updatedProduct = await patchProduct(productId, {
        price: product.price + 1000,
      });
      console.log('Product Updated:', updatedProduct);

      // 4. 상품 삭제
      // await deleteProduct(productId);
      // console.log('Product Deleted');
    }
  } catch (err) {
    console.error('API Error');
    console.error('Status:', err.status);
    console.error('Message:', err.message);
    console.error('Info:', err.info);
  }
}

run();