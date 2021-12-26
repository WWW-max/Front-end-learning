var lengthOfLongestSubstring = function(s) {
    // 哈希集合，记录每个字符是否出现过
    const set = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let right = -1, res = 0;
    for (let i = 0; i < n; ++i) {
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            set.delete(s[i - 1]);
        }
        while (right + 1 < n && !set.has(s[right + 1])) {
            // 不断地移动右指针
            set.add(s[right + 1]);
            ++right ;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串
        res = Math.max(res,right  - i + 1);
    }
    return res;
};