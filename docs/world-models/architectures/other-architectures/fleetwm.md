---
title: "Multi-Task Interactive Robot Fleet Learning with Visual World Models"
design: "FleetWM"
arxiv: https://arxiv.org/abs/2410.22689
github: https://github.com/UT-Austin-RPL/sirius-fleet
---

# FleetWM: Multi-Task Interactive Robot Fleet Learning with Visual World Models

::: info 璁烘枃淇℃伅
- **Design**: FleetWM
- **璁烘枃鍏ㄧ抽*: Multi-Task Interactive Robot Fleet Learning with Visual World Models
- **arXiv**: [https://arxiv.org/abs/2410.22689](https://arxiv.org/abs/2410.22689)
- **GitHub**: [https://github.com/UT-Austin-RPL/sirius-fleet](https://github.com/UT-Austin-RPL/sirius-fleet)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

Sirius-Fleet 鏄竴涓潰鍚戝浠诲姟浜や簰寮忔満鍣ㄤ汉闆嗙兢瀛︿範鐨勬鏋讹紝鍙戣〃浜?CoRL 2024銆傞殢澶ц妯″浠诲姟鏈哄櫒浜哄涔犵殑鍙戝睍锛屾満鍣ㄤ汉闆嗙兢鏈夋湜閮ㄧ讲鍦ㄥ搴拰宸ヤ笟鍦烘櫙涓墽琛屽鏍峰寲浠诲姟锛屼絾瀹冧滑闈复鐪熷疄涓栫晫鍙樺紓鎬у甫鏉ョ殑娉涘寲鎬у拰椴佹鎬ф寫鎴樸€係irius-Fleet 鐨勬牳蹇冩€濊矾鏄細鍦ㄩ儴缃茶繃绋嬩腑鐩戞帶鏈哄櫒浜烘€ц兘锛屽苟鍦ㄥ繀瑕佹椂寮曞叆浜虹被鏉ョ籂姝ｆ満鍣ㄤ汉鐨勫姩浣溿€傚叿浣撹€岃█锛屽畠浣跨敤瑙嗚涓栫晫妯″瀷棰勬祴鏈潵鍔ㄤ綔鐨勭粨鏋滐紝骞舵瀯寤哄紓甯搁娴嬪櫒锛坅nomaly predictors锛夊垽鏂娴嬬粨鏋滄槸鍚﹀彲鑳戒骇鐢熷紓甯搞€傚叧閿垱鏂板湪浜庘€斺€旈殢鐫€鏈哄櫒浜鸿嚜涓绘€х殑鎻愰珮锛屽紓甯搁娴嬪櫒鑷姩璋冩暣鍏跺垽瀹氭爣鍑嗭紝瀵艰嚧瀵逛汉绫诲共棰勭殑璇锋眰閫愭笎鍑忓皯锛屼粠鑰屼娇浜虹被宸ヤ綔璐熻嵎闅忔椂闂撮€愭闄嶄綆銆?
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歋irius-Fleet 閲囩敤瑙嗚涓栫晫妯″瀷鈥斺€斾互褰撳墠瑙傛祴鍜屾嫙璁姩浣滀负杈撳叆锛岄娴嬫墽琛岃鍔ㄤ綔鍚庣殑鏈潵瑙嗚缁撴灉銆傝瑙変笘鐣屾ā鍨嬮€氬父鍩轰簬瑙嗛棰勬祴鏋舵瀯锛堝瑙嗛鎵╂暎鎴栬嚜鍥炲綊妯″瀷锛夛紝灏嗗綋鍓嶅抚鍜屽姩浣滅紪鐮佹槧灏勪负鏈潵甯х殑瑙嗚棰勬祴銆?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛氬紓甯搁娴嬪櫒鏄牳蹇冨涔犵粍浠垛€斺€斿熀浜庤瑙変笘鐣屾ā鍨嬮娴嬬殑鏈潵瑙嗚缁撴灉锛屽紓甯搁娴嬪櫒鍒ゆ柇棰勬祴缁撴灉鏄惁鍋忕姝ｅ父鎿嶄綔妯″紡锛堝鏈烘鑷傜鎾為殰纰嶇墿銆佺墿浣撴帀钀界瓑锛夈€備汉绫讳氦浜掓暟鎹紙浜虹被鐨勭籂姝ｈ涓猴級琚敹闆嗗苟鐢ㄤ簬鎸佺画寰皟鏈哄櫒浜虹殑绛栫暐妯″瀷锛屽舰�?鎵ц鈫掗娴嬧啋妫€娴嬪紓甯糕啋浜虹被骞查鈫掑涔犳敼�?鐨勯棴鐜€傞殢鐫€绛栫暐鎬ц兘鎻愬崌锛屽紓甯搁娴嬪櫒鐨勯槇鍊艰嚜鍔ㄦ敹绱э紝鍑忓皯涓嶅繀瑕佺殑骞查璇锋眰銆?
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歋irius-Fleet 在 RoboCasa锛堜豢鐪燂級銆Mutex锛堢湡瀹炰笘鐣岋級涓や釜澶ц妯″浠诲姟鍩哄噯涓婅繘琛岃瘎浼帮紝娑电洊瀹跺涵鍜屽伐涓氬満鏅腑鐨勫鏍峰寲鎿嶄綔浠诲姟銆傝瑙変笘鐣屾ā鍨嬩娇鏈哄櫒浜鸿兘鍔鎯宠繘琛屽姩鐨勫悗鏋滐紝鍦ㄩ€忔槑鎵ц涔嬪墠棰勫垽鏄惁鍙兘鍑洪敊銆?
### 浠ｇ爜瀹炵幇瑕佺偣

- **瑙嗚涓栫晫妯″瀷*锛氬熀浜庤棰戦娴嬬敤next-frame 棰勬祴妯″瀷锛屼互褰撳墠甯?+ 鍔ㄤ綔綔鏈潵甯?- **寮傚父棰勬祴銆*锛氬紓甯告娴嬫ā鍨嬶紝鍩轰簬棰勬祴鐨勬湭鏉ュ抚棰勬祴寮傚父姒傜巼
- **鑷€傚簲闃堝€?*锛氬紓甯稿垽瀹氶槇鍊奸殢绛栫暐鎬ц兘鍔ㄦ€佽皟櫒- **浜虹被鍦ㄧ幆**锛氬紓甯歌Е鍙戞椂璇锋眰浜虹被杩滅▼鎿嶄綔绾犳锛岀籂姝ｆ暟鎹敤浜庣瓥鐣ュ井璋?
### 鍏抽敭鍒涙柊。
- **浜烘満浜や簰铻嶅悎**锛氳瑙変笘鐣屾ā鍨嬬敤浜庣洃鎺ф€ц兘骞跺湪蹇呰鏃惰Е鍙戜汉绫诲共棰?- **鑷€傚簲寮傚父闃堝彲*锛氶殢鐫€鏈哄櫒浜鸿兘鍔涙彁鍗囪嚜鍔ㄥ噺灏戝浜轰氦浜掍緷璧?- **澶氫换鍔￠泦缇ゅ涔?*锛氶潰鍚戝鍦烘櫙澶氫换鍔＄殑鏈哄櫒浜洪泦缇ら儴鍒- **CoRL 2024**锛氬彂琛ㄤ簬椤剁骇鏈哄櫒浜轰細璁?

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
