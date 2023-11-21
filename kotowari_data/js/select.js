// 大分類、小分類の選択肢を配列でそれぞれ用意
const categories = [
	'2023年04月',
	'2023年05月',
	'2023年06月',
];

const categorySelect1 = document.getElementById('category-select-ym');

// 大分類のプルダウンを生成
categories.forEach(category => {
    const option = document.createElement('option');
    option.textContent = category;    
});
