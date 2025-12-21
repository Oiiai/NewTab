// script.js
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // 格式化为 HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// 搜索功能
function performSearch() {
    const searchInput = document.getElementById('search__input');
    const query = searchInput.value.trim();
    
    // 如果输入框为空，不执行搜索
    if (query === '') {
        return;
    }
    
    // 使用Bing进行搜索
    const bingSearchUrl = `https://cn.bing.com/search?q=${encodeURIComponent(query)}`;
    window.open(bingSearchUrl, '_blank');
}

// 初始化时立即更新一次时钟
updateClock();

// 每秒更新一次时钟
setInterval(updateClock, 1000);

// 添加搜索按钮的点击事件
document.getElementById('search__btn').addEventListener('click', performSearch);

// 添加输入框的回车键事件
document.getElementById('search__input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});