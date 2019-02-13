# 套件

* [日期選擇器](http://t1m0n.name/air-datepicker/docs/)
* [table](https://datatables.net/extensions/responsive/examples/styling/bootstrap4.html)

上述操作在 index.html 最下面

* [fontawesome](https://fontawesome.com/icons)

# CSS basic

* [bootstrap4.3 css only](https://getbootstrap.com/docs/4.3/getting-started/introduction/)

# 資料夾

**scr** 為js與scss原始碼

**dist** 為上述轉譯與壓縮後，實際上線的原始碼


## 功能

### similar detail-summary

* 以 .summary 為觸發按扭
* 以 .detail[data-slide]為目標

[data-slide]的值 .summary 要與 .detail 相同(視為互相影響)，否則會展開 .summary 的下一個元素。

example：
```html
    <input type="button" class="summary" value="進階查詢" data-slide="advanced">
    <div class="border-top border-bottom mb-3 py-3 detail" data-slide="advanced">
        content...
    </div>
```

### 瀏覽人次

瀏覽人次加上 #visit-times，會每三個位數加上","。

### table 裡面 class="d-none d-lg-table-cell" 的意思

在視窗小於992px的時候隱藏(display:none)，大於的時候以 table-cell 顯示。

## 問題

### 原本點選 tr 會顯示該筆資料

為因應鍵盤操作與noscript操作，所以在項次(1,2,3...)的地方加上超連結，希望改成點選項次顯示該筆資料。

### 進階查詢的處理進度

不知道要怎麼鍵盤操作才能複選。
