// 大分類、小分類の選択肢を配列でそれぞれ用意
const categories = [{% select_ym %}];

const categorySelect1 = document.getElementById('category-select-ym');

// 大分類のプルダウンを生成
categories.forEach(category => {
    const option = document.createElement('option');
    option.textContent = category;    
});
