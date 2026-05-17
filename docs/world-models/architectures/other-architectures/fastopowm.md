---
title: "FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models"
design: "FASTopoWM"
arxiv: https://arxiv.org/abs/2507.23325
github: https://github.com/YimingYang23/FASTopoWM
---

# FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models

::: info 璁烘枃淇℃伅
- **Design**: FASTopoWM
- **璁烘枃鍏ㄧ抽*: FASTopoWM: Fast-Slow Lane Segment Topology Reasoning with Latent World Models
- **arXiv**: [https://arxiv.org/abs/2507.23325](https://arxiv.org/abs/2507.23325)
- **GitHub**: [https://github.com/YimingYang23/FASTopoWM](https://github.com/YimingYang23/FASTopoWM)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

FASTopoWM 鏄竴涓潰鍚戣溅閬撴鎷撴墤鎺ㄧ悊涓Fast-Slow 妗嗘灦锛屼互娼滃湪涓栫晫妯″瀷澧炲己鏃跺簭鎰熺煡銆傝溅閬撴鎷撴墤鎺ㄧ悊鎻愪緵鍏ㄩ潰鍚BEV 閬撹矾鍦烘櫙鐞嗚В锛屾槸瑙勫垝瀵煎悜绔埌绔嚜鍔ㄩ┚椹剁郴缁熶腑鐨勫叧閿劅鐭ユā鍧椼€傜幇鏈夋柟娉曞湪鍒╃敤鏃跺簭淇℃伅澧炲己妫€娴嬪拰鎺ㄧ悊鎬ц兘鏂归潰瀛樺湪涓嶈冻鈥斺€斿熀浜庢祦锛坰tream锛夌殑鏃跺簭浼犳挱鏂规硶鍙椾笁鏂归潰闄愬埗锛氳繃搴︿緷璧栧巻鍙叉煡璇€佸浣嶅Э浼拌澶辫触鏁忔劅銆佹椂搴忎紶鎾笉鍏呭垎銆侳ASTopoWM 鐨勬牳蹇冨垱鏂版槸蹇參涓ゆ敮璺灦鏋勶細蹇€熸敮璺娇鐢ㄦ柊鍒濆鍖栫殑鏌ヨ蹇€熷搷搴旀柊鍦烘櫙锛屾參閫熸敮璺€氳繃娼滃湪涓栫晫妯″瀷灏嗗巻鍙茬姸鎬佷紶鎾嚦褰撳墠鏃跺埢銆傜粺涓€妗嗘灦瀹炵幇蹇參涓ゆ敮璺殑骞惰鐩戠潱鍜岀浉浜掑寮猴紝娼滃湪涓栫晫妯″瀷浠ュ姩浣滈殣鍙橀噺涓烘潯浠舵潵璺ㄦ椂搴忎紶鎾煡璇㈠嗗BEV 鐘舵€佽〃绀猴紝鏄捐憲闄嶄綆浜嗗浣嶅Э浼拌绮惧害鐨勪緷璧栥。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛欶ASTopoWM 閲囩敤鏌ヨ寮忔灦鏋勮繘琛岃溅閬撴鍜屼腑蹇冪嚎鐨勬嫇鎵戞帹鐞嗐€傝瑙夌紪鐮佸櫒浠庡瑙嗗浘鍥惧儚涓彁鍙?BEV 鐗瑰緛銆侳ast-Slow 鍙屾敮璺悇鑷淮鎶ゆ煡璇細蹇€熸敮璺紙Fast锛変娇鐢ㄥ綋鍓嶅抚閲嶆柊鍒濆鍖栫殑鏌ヨ锛屽揩閫熼€傚簲鏂板満鏅彉鍖栵紱鎱㈤€熸敮璺紙Slow锛変娇鐢ㄤ粠鍘嗗彶鏃跺埢浼犳挱鏉ョ殑鏌ヨ锛屼繚鐣欓暱鏃剁▼鏃跺簭淇℃伅。
**Knowledge Learning锛堢煡璇嗗涔狅級*锛氭綔鍦ㄤ笘鐣屾ā鍨嬫槸鏍稿績鏃跺簭浼犳挱鏈哄埗銆傚畠鐢辨綔鍦ㄦ煡璇笘鐣屾ā鍨嬪拰娼滃湪BEV 涓栫晫妯″瀷缁勬垚锛屼袱鑰呭潎浠ュ姩浣滈殣鍙橀噺锛堢敱鑷溅閫熷害鍜岃浆鍚戜俊鎭紪鐮侊級涓烘潯浠讹紝棰勬祴浠?t-1 姩t 鏃跺埢鐨勬綔鍦ㄧ姸鎬佸彉鍖栥€傝繖绉嶆綔鍦ㄧ┖闂寸殑婕斿寲寤烘ā閬垮厤浜嗘樉寮忓嚑浣曟姇褰卞浣嶅Э绮惧害鐨勪緷璧栥€傚揩鎱㈡敮璺叡浜娴嬪ご锛屽巻鍙叉煡璇㈠拰鏂版煡璇㈢殑骞惰鐩戠潱淇冭繘涓ゆ敮璺箣闂寸殑鐭ヨ瘑钂搁鈥斺€旀參閫熸敮璺鍒版洿绋冲畾鐨勬椂搴忕壒寰侊紝蹇€熸敮璺鍒版洿鐏垫晱鐨勫嵆鏃跺搷搴斻。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛欶ASTopoWM 硶OpenLane-V2 鍩哄噯涓婅瘎浼帮紝杞﹂亾娈垫娴?mAP 嬪33.6% 鎻愬崌鍒?37.4%嗙3.8%锛夛紝涓績绾挎劅鐭?OLS 紝41.5% 鎻愬崌鍒?46.3%嗙4.8%锛夈€傛綔鍦ㄤ笘鐣屾ā鍨嬬殑寮曞叆浣挎ā鍨嬪湪澶嶆潅椹鹃┒鍦烘櫙鍜岄珮鍔ㄦ€佸彉鍖栦笅浠嶈兘淇濇寔绋冲畾鐨勬嫇鎵戞帹鐞嗙簿搴︺€?
### 浠ｇ爜瀹炵幇瑕佺偣

- **Fast-Slow 鍙屾敮璺?*锛氬揩閫熸敮璺紙鏂板垵濮嬪寲鏌ヨ锛 鎱㈤€熸敮璺紙鏃跺簭浼犳挱鏌ヨ锛夛紝鍏变韩瑙ｇ爜寮- **娼滃湪涓栫晫妯″瀷*锛氭煡璇笘鐣屾ā鍨+ BEV 涓栫晫妯″瀷锛屼互鍔ㄤ綔闅愬悜閲忎负鏉′欢棰勬祴娼滃湪鐘舵€佹紨鍖?- **骞惰鐩戠潱**锛氬巻鍙叉煡璇㈠拰鏂版煡璇㈠悓鏃惰緭鍏ユ娴嬪ご锛岃揩浣挎參閫熸敮璺繚鎸佷笌蹇€熸敮璺浉褰撶殑妫€娴嬬簿搴?- **OpenLane-V2**锛氭爣鍑嗚溅閬撴嫇鎵戞帹鐞嗗熀。
### 鍏抽敭鍒涙柊。
- **Fast-Slow 鍙屾敮璺嫇鎵戞帹鐞?*锛氬巻鍙插拰鏂板垵濮嬪寲鏌ヨ骞惰鐩戠潱銆佺浉浜掑寮?- **娼滃湪涓栫晫妯″瀷椹卞姩鏃跺簭浼犳挱**锛氫互鍔ㄤ綔闅愬彉閲忔潯浠跺湪娼滃湪绌洪棿婕斿寲锛岄伩鍏嶅嚑浣曟姇褰辩殑浣嶅Э鏁忔劅鎬?- **澶у箙瓒呰 SOTA**锛氳溅閬撴 mAP +3.8%锛屼腑蹇冪嚎 OLS +4.8%
- **OpenLane-V2 鏂版爣鏉?*


## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
