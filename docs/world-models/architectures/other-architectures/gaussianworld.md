---
title: "GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction"
design: "GaussianWorld"
arxiv: https://arxiv.org/abs/2412.10373
github: https://github.com/zuosc19/GaussianWorld
---

# GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction

::: info 璁烘枃淇℃伅
- **Design**: GaussianWorld
- **璁烘枃鍏ㄧ抽*: GaussianWorld: Gaussian World Model for Streaming 3D Occupancy Prediction
- **arXiv**: [https://arxiv.org/abs/2412.10373](https://arxiv.org/abs/2412.10373)
- **GitHub**: [https://github.com/zuosc19/GaussianWorld](https://github.com/zuosc19/GaussianWorld)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

GaussianWorld 鏄竴绉嶅熀浜庝笘鐣屾ā鍨嬬殑妗嗘灦锛屽皢 3D 鍗犵敤棰勬祴閲嶆柊瀹氫箟涓轰互褰撳墠浼犳劅鍣ㄨ緭鍏ヤ负鏉′欢锛4D 鍗犵敤棰勬祴闂銆傜幇鏈夋椂搴忔柟娉曢€氬父鍙槸绠€鍗曡瀺鍚堝墠搴忓抚鐨勮〃绀烘潵鎺ㄦ柇褰撳墠 3D 鍗犵敤锛屼絾蹇界暐浜嗛┚椹跺満鏅殑杩炵画鎬т互式3D 鍦烘櫙婕斿寲鎻愪緵鐨勫己鍏堥獙鐭ヨ瘑锛堜緥濡傚彧鏈夊姩鎬佺墿浣撶Щ鍔紝闈欐€佸満鏅繚鎸佷竴鑷达級銆侴aussianWorld 鐨勬牳蹇冨垱鏂版槸灏嗗満鏅紨鍖栨樉寮忓垎瑙ｄ负涓変釜鍥犵礌锛1) 闈欐€佸満鏅殑鑷垜杩愬姩瀵归綈锛?2) 鍔ㄦ€佺墿浣撶殑灞€閮ㄨ繍鍔紱(3) 鏂拌瀵熷満鏅殑琛ュ叏銆傜劧鍚庝娇鐢ㄩ珮鏂笘鐣屾ā鍨嬶級D Gaussian Splatting锛夋樉寮忓埄鐢ㄨ繖浜涘厛楠岃繘琛屽満鏅紨鍖栨帹鐞嗭紝鍦ㄤ笉澧炲姞棰濆璁＄畻寮€閿€鐨勬儏鍐典笅鎻愬崌鍗曞抚妯″瀷鎬ц濇2%+ mIoU。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛欸aussianWorld 浣跨域3D Gaussian Splatting 浣滀负涓栫晫琛ㄧず鈥斺€斿皢鍦烘櫙琛ㄧず涓轰竴缁勫叿鏈変綅缃€佸崗鏂瑰樊銆侀鑹插拰涓嶉€忔槑搴﹀睘鎬х娇3D 楂樻柉妞悆浣撱€傝瑙夌紪鐮佸垎涓轰笁涓苟琛岃矾寰勶細鑷垜杩愬姩瀵归綈灏嗕笂涓€鏃跺埢鐨勯珮鏂満閫氳繃鑷溅浣嶅Э鍙樺寲鍒氭€у彉鎹㈠埌褰撳墠鍧愭爣绯伙紱鍔ㄦ€佺墿浣撹繍鍔ㄩ娴嬫洿鏂扮Щ鍔ㄧ墿浣撶殑楂樻柉浣嶇疆鍜屽睘鎬э紱鏂拌瀵熷尯鍩熻ˉ鍏ㄦ牴鎹綋鍓嶄紶鎰熷櫒瑙傛祴鎺ㄦ柇鏂拌繘鍏ヨ閲庡尯鍩熺殑楂樻柉鍒嗗竷銆?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛氭ā鍨嬪櫒NuScenes 鏁版嵁闆嗕笂浠ヨ嚜鐩戠潱鏂瑰紡璁粌銆傚叧閿涔犱俊鍙锋潵鑷笁涓柟闈細棰勬祴鐨勯珮鏂満娓叉煋鍚庣殑鍥惧儚搴斾笌瀹為檯瑙傛祴涓€鑷达紱棰勬祴閲忓崰鐢ㄥ簲涓庢縺鍏夐浄杈剧偣浜戠敓鎴愮殑浼湡鍊煎崰鐢ㄤ竴鑷达紱鍦烘櫙婕斿寲棰勬祴搴斾繚鎸佹椂搴忚繛缁€с€傞珮鏂〃绀虹殑鑷劧鍙井鎬т娇娓叉煋鍜岄娴嬪彲浠ュ湪鍚屼竴妗嗘灦涓鍒扮浼樺寲銆?
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛欸aussianWorld 涓昏闈㈠悜 3D 鍗犵敤棰勬祴浠诲姟锛屼絾瀹冪殑涓栫晫妯″瀷璁捐浣垮叾澶╃劧鏀寔"鏍规嵁褰撳墠瑙傛祴鎺ㄦ柇瀹屾棤4D 鍦烘櫙鐘舵€?鐨勯娴嬭兘鍔涳紝鍙綔涓轰笅娓歌鍒掑拰鎺у埗浠诲姟鐨勬劅鐭ヨ緭鍏ャ€傜敱浜庝笉澧炲姞棰濆璁＄畻锛岃妗嗘灦鍙珮鏁堥泦鎴愬埌鐜版湁鐨勫崰鐢ㄩ娴嬫祦姘寸嚎涓€?
### 浠ｇ爜瀹炵幇瑕佺偣

- **3D 楂樻柉鍦烘櫙琛ㄧ銆*锛氬皢鍦烘櫙缂栫爜涓轰竴鐨3D 楂樻柉锛屾瘡涓珮鏂寘鍚綅缃?渭銆佸崗鏂瑰緛危銆佷笉閫忔槑搴?級鍜岄鑹?c
- **涓夐」鍒嗚鍒*锛氳嚜鎴戣繍鍔ㄥ榻愶紙鍒氭€у彉鎹㈢煩闃?T_ego锛夈€佸姩鎬佺墿浣撻娴嬶紙杩愬姩缃戠粶 螖渭_dyn锛夈€佹柊鍦烘櫙琛ュ叏锛堟柊楂樻柉鐢熸垚缃戠粶锛?- **鍙井娓叉煋**锛氶€氳繃splatting 灏嗛珮鏂満娓叉煋涓?2D 鍥惧儚锛屼笌瑙傛祴瀵规瘮璁＄畻鍏夊害鎹熷け
- **浠ｇ爜寮€婧?*锛欸itHub 鍏。
### 鍏抽敭鍒涙柊。
- **4D 鍗犵敤棰勬祴閲嶅畾涔?*锛氬皢3D 鍗犵敤棰勬祴鎻愬崌涓哄満鏅紨鍖栭┍鍔ㄧ腑4D 棰勬祴闂涓- **涓夐」鍥犵礌鍒嗚В**锛氳嚜杞﹁繍鍔+ 鍔ㄦ€佺墿浣?+ 鏂板満鏅ˉ鍏ㄧ殑鏄惧紡瑙ｈ殑- **楂樻柉涓栫晫妯″瀷*锛氫娇鐢?3DGS 浣滀负缁熶竴鐨勪笘鐣岃〃绀哄拰婕斿寲杞戒綋
- **闆堕澶栬绠楀紑閿偣*锛氭€ц兘鎻愬姩2%+ mIoU 浣嗕笉澧炲姞鎺ㄧ悊璁＄畻。

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
