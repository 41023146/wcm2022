var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Rust', 'text': '\n 1. 安裝 \n \n 2. 中文入門 \n \n 3. 教學影片 \n \n \n \n \n', 'tags': '', 'url': 'Rust.html'}, {'title': 'Rust_src', 'text': '\n 1. hello_world \n 2. string和str \n 3. guess \n 4. if let \n 5. 練習一 \n (1/1!+1/2!+1/3!+......+1/10!) \n 6. 練習二 \n 輸入(x,y) \n 輸出 1/x+(1/x)^2+(1/x)^3+.....+(1/x)^y', 'tags': '', 'url': 'Rust_src.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'w8', 'text': '\n 1.請問如何設定 nginx, 讓其中所伺服的檔案只允許系上電腦下載? \n \xa0 \xa0 1.先進入nginx-1.20.2\\conf目錄中找到nginx.conf將裡面http下的server改成: \n \xa0 \xa0 server { \n \xa0 \xa0 \xa0 \xa0 listen\xa0\xa0\xa0\xa0\xa0\xa0 [::]:88 ipv6only=off; \n \xa0 \xa0 \xa0 \xa0 listen\xa0\xa0\xa0\xa0\xa0\xa0 88; \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0 \xa0 \xa0 \xa0 #allow 140.130.XX.0/24; \n \xa0 \xa0 \xa0 \xa0 allow 2001:288:6004:XX::0/32; \n \xa0 \xa0 \xa0 \xa0 deny all; \n \xa0\xa0\xa0\xa0 \xa0 \n \xa0 \xa0 \xa0 \xa0 location / { \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 root C:/pj2022/nginx-1.20.2/spring2022; \n \xa0 \xa0 \xa0 \xa0 } \n \xa0 \xa0 \xa0 \xa0 autoindex on; \n \xa0 \xa0} \n \n \n 2.請問如何利用 gpg4win 查驗所下載的 nginx 檔案與官方網站所附的數位簽章吻合? \n \xa0 \xa0 1.下載gpg4win \n \xa0 \xa0 2.打開Kleopatra用(解密/檢查)打開nginx-1.20.2.zip,查看它的ID \n \xa0 \xa0 3.再去官網下載檔案旁邊的pgp檔看兩者的ID是否一樣 \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w17', 'text': '程式原始碼及註解 \n \n \n \n \n \n \n \n \n \n \n \n \n 俄羅斯方塊6分影片:', 'tags': '', 'url': 'w17.html'}, {'title': 'online', 'text': '', 'tags': '', 'url': 'online.html'}, {'title': 'w13', 'text': '\n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w14', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n', 'tags': '', 'url': 'w14.html'}, {'title': 'midterm', 'text': '\n \n \n   \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'midterm.html'}, {'title': 'Tetris', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n', 'tags': '', 'url': 'Tetris.html'}, {'title': 'progress rate', 'text': 'week1 \n 1. 電腦輔助設計室IPv6 網路設定。 \n 2.創建wcm2022倉儲。 \n week2 \n 1.添加Rust頁面。 \n week3 \n 1.學習建立可攜系統。 \n week4 \n 1.討論同學倉儲為什麼無法添加cmsimde。 \n week5 \n 1.無 \n week6 \n 1.無 \n week7 \n 1.學習如何設定nginx。 \n 2.用gpg4win查看下載的檔案的數位簽證。 \n week8 \n 1.添加midterm頁面，並加入期中考的兩個題目和答案。 \n week9 \n 1.期中考週。 \n 2.期中考改為在wink影片添加註解並將影片放到個人網站。 \n week10 \n 1.加入電腦輔助設計室個人虛擬主機 IP 設定。 \n week11 \n 1.加入 w11_1a 網路對接與 RJ45 網路線相關資料。 \n week12 \n 1.建立虛擬主機。 \n 2.在電腦輔助設計室設定伺服器 \n week13 \n 1.建立Bython環境，並加入Tetris 遊戲。 \n 2.Tetris 線上遊戲專案報告。 \n week14 \n 1.資料對比並將退選的同學資料刪除。 \n week15 \n 1.放假。 \n 2.將 Tetris 遊戲加入計分系統。 \n 3.Tetris 遊戲計分系統報告。 \n week16 \n 1.期末報告整理。', 'tags': '', 'url': 'progress rate.html'}, {'title': 'run', 'text': '\n \n \n \n \n \n \n \n  Cango 程式庫  \n \n \n \n \n \n \n  for Konva 程式庫  \n \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n Filename:  .py   \n Run   Output   清除輸出區 清除繪圖區 Reload \n \n \n \n  ****************************** keyword start  \n \n \n \n \n \n \n \n \n \n \n \n \n \n Keyword hw1_1 hw1_2 snake ai_snake a_to_b w13 畫表格 隨機生成方格 隨機生成方格plus 簡易計算機 猜數字遊戲 \n', 'tags': '', 'url': 'run.html'}, {'title': 'runsrc', 'text': '\n ( run.txt )', 'tags': '', 'url': 'runsrc.html'}]};