---
title: "GAF: Gaussian Action Field as a 4D Representation for Dynamic World Modeling in Robotic Manipulation"
design: "GAF"
arxiv: https://arxiv.org/abs/2506.14135
---

# GAF: Gaussian Action Field as a 4D Representation for Dynamic World Modeling in Robotic Manipulation

::: info 璁烘枃淇℃伅
- **Design**: GAF
- **璁烘枃鍏ㄧ抽*: GAF: Gaussian Action Field as a 4D Representation for Dynamic World Modeling in Robotic Manipulation
- **arXiv**: [https://arxiv.org/abs/2506.14135](https://arxiv.org/abs/2506.14135)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

GAF (Gaussian Action Field) 鎻愬嚭浜?V-4D-A锛圴ision-to-4D-to-Action锛夋鏋讹紝涓烘満鍣ㄤ汉鎿嶆帶浠诲姟寮曞叆鍩轰腑4D 琛ㄧず鐨勭洿鎺ュ姩浣滄帹鐞嗐€傜幇鏈夋柟娉曢伒寰?V-A锛堣瑙夌洿鎺ラ娴嬪姩浣滐級鎴?V-3D-A锛堥€氳繃3D 涓棿琛ㄧず鎺ㄧ悊鍔ㄤ綔锛夎寖寮忥紝浣嗕袱鑰呭湪澶嶆潅鐨勫姩鎬佹搷鎺у満鏅腑閮介潰涓村姩浣滅簿搴︿笉瓒崇殑闂銆侴AF 鐨勬牳蹇冨垱鏂版槸鎵╁睍 3D Gaussian Splatting鍒DGS锛夛紝涓哄叾澧炲姞鍙涔犵殑杩愬姩灞炴€э紙motion attributes锛夛紝浣块珮鏂〃绀轰粠闈欐嫇3D 鎵╁睍鍒板姩浣4D鈥斺€斿悓鏃跺缓妯″満鏅嚑浣曞拰鎿嶆帶鍔ㄤ綔鐨勮繍鍔ㄣ€侴AF 鎻愪緵涓変釜鐩镐簰鍏宠仈鐨勮緭鍑猴細褰撳墠鍦烘櫙閲嶅缓銆佹湭鏉ュ抚棰勬祴銆佷互鍙婇€氳繃楂樻柉杩愬姩浼拌鐨勫垵濮嬪姩浣滐紙init action锛夈€傝繘涓€姝ワ紝浣跨敤鍔ㄤ綔-瑙嗚瀵归綈鐨勫幓鍣鏋讹紝鐨GAF 鐢熸垚鐨勭粺涓€琛ㄧず锛堝垵濮嬪姩浣?+ 楂樻柉鎰熺煡锛変负鏉′欢锛岀簿缁嗗寲杈撳嚭鏇寸簿纭殑缁堢鍔ㄤ綔銆?
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛欸AF 鐨勮瑙夌紪鐮佹牳蹇冩槸鍙繍鍔?4D 楂樻柉琛ㄧず銆傚湪鏍囧噯 3DGS锛堜綅缃€佸崗鏂瑰樊銆侀鑹层€佷笉閫忔槑搴︼級鐨勫熀纭€涓婏紝姣忎釜楂樻柉棰濆瀛︿範杩愬姩灞炴€р€斺€斿寘鎷€熷害鐭㈤噺銆佽繍鍔ㄤ笉纭畾鎬у拰鏃堕棿渚濊禆鎬с€傝繖浜涜繍鍔ㄥ睘鎬т娇楂樻柉琛ㄧず鑳藉鍚屾椂缂栫爜鍦烘櫙鐨勭灛鏃跺瑙傚拰闅忔椂闂寸殑婕斿寲瓒嬪娍銆備粠澶氳瑙?RGB-D 杈撳叆涓紝妯″瀷閫氳繃鍙井娓叉煋閲嶅缓褰撳墠鏃跺埢鐨?3D 楂樻柉鍦猴紝鍚屾椂浼拌姣忎釜楂樻柉浣撶殑杩愬姩鍙傛暟銆?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛欸AF 閫氳繃涓変釜鐩镐簰鍏宠仈鐨勭洃鐫ｄ俊鍙疯繘琛岃缁冿細鍦烘櫙閲嶅缓锛堥娴嬬殑楂樻柉娓叉煋vs 瀹為檯瑙傛祴锛夈€佹湭鏉ュ抚棰勬祴锛堥娴嬬殑鏈潵楂樻柉娓叉煋 vs 瀹為檯鏈潵甯э級銆佸姩浣滀及璁★紙浠庨珮鏂繍鍔ㄤ腑鎺ㄥ鐨勫垵濮嬪姩浣vs 鐪熷€煎姩浣滐級銆傝繖绉嶅浠诲姟瀛︿範浣挎ā鍨嬫棦鐞嗚В鍦烘櫙鐨勯潤鎬佺粨鏋勶紝鍙堢悊瑙ｅ姩鎬佹紨鍖栧拰鎿嶆帶鍔ㄤ綔鐨勫洜鏋滃叧绯汇€傚姩浣?瑙嗚瀵归綈鐨勫幓鍣ā鍧楄繘涓€姝ヤ互鑱斿悎琛ㄧず涓烘潯浠惰繘琛屾墿鏁ｅ幓鍣紝鐢熸垚绮剧粏鍖栫殑鎿嶆帶鍔ㄤ綔。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛欸AF 鐨勬牳蹇冨簲鐢ㄦ槸鏈哄櫒浜烘搷鎺р€斺€旂粰瀹氬綋鍓嶅満鏅娴嬶紝妯″瀷鍚屾杈撳嚭鍦烘櫙閲嶅缓銆佹湭鏉ラ娴嬪拰鎿嶆帶鍔ㄤ綔寤鸿銆傚4D-A 鑼冨紡鐩告瘮 V-A 浜V-3D-A 鐨勪紭鍔垮湪浜庯繘D 琛ㄧず鍚屾椂鎹曡幏浜嗙┖闂村嚑浣曞拰鏃堕棿鍔ㄦ€侊紝涓哄姩浣滄帹鐞嗘彁渚涗簡鏇翠赴瀵岀殑涓婁笅鏂囥€傚湪澶氱鎿嶄綔浠诲姟涓紝GAF 鐩告 SOTA 鏂规硶骞冲潎鎻愬悎+7.3% 鎴愬姛鐜囥€?
### 浠ｇ爜瀹炵幇瑕佺偣

- **鍙繍鍔ㄩ珮鏂*锛氭墿灞?3DGS锛屼负姣忎釜楂樻柉娣诲姞杩愬姩閫熷害鐭㈤噺鍜屾椂搴忎緷璧栧睘涓- **涓夐噸杈撳嚭鍒*锛氶噸寤哄ご锛堟覆鏌撳綋鍓嶅抚锛夈€侀娴嬪ご锛堟覆鏌撴湭鏉ュ抚锛夈€佸姩浣滃ご锛堜粠楂樻柉杩愬姩鍦轰及璁℃搷鎺у姩浣滐紝- **鍔ㄤ綔瑙嗚瀵归綈鍘诲櫔**锛欸AF 鐨勬劅鐭ュ拰鍒濆鍔ㄤ綔缂栫爜涓鸿仈鍚堟潯浠讹紝杈撳叆鎵╂暎绛栫暐缃戠粶杩涜鍔ㄤ綔鍘诲姟- **绔埌绔**锛氶噸寤烘崯敤+ 棰勬祴鎹熷け + 鍔ㄤ綔浼拌鎹熷け鐨勮仈鍚堜紭鍖?
### 鍏抽敭鍒涙柊。
- **V-4D-A 鏂拌寖寮?*锛氳秴瓒?V-A 呰V-3D-A锛岀洿鎺ュ熀浜4D 琛ㄧず杩涜鍔ㄤ綔鎺ㄧ悊
- **楂樻柉鍔ㄤ綔鍦*锛氶娆″皢鍙涔犺繍鍔ㄥ睘鎬ч泦鎴愬埌 3DGS 涓紝鏋勫缓 4D 涓栫晫妯″瀷- **涓夐噸浜掑叧鑱旇緭鍑?*锛氬悓鏃惰繘琛屽満鏅噸寤恒€佹湭鏉ラ娴嬪拰鍔ㄤ綔鎺ㄧ悊锛岀浉浜掑�?- **澶у箙瓒呰 SOTA**：11.5dB PSNR 閲嶅缓鎻愬崌 + +7.3% 鎿嶆帶鎴愬姛鐜囨彁鍗?

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
