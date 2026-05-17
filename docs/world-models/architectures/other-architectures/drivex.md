---
title: "DriveX: Omni Scene Modeling for Learning Generalizable World Knowledge in Autonomous Driving"
design: "DriveX"
arxiv: https://arxiv.org/abs/2505.19239
---

# DriveX: Omni Scene Modeling for Learning Generalizable World Knowledge in Autonomous Driving

::: info 璁烘枃淇℃伅
- **Design**: DriveX
- **璁烘枃鍏ㄧ抽*: DriveX: Omni Scene Modeling for Learning Generalizable World Knowledge in Autonomous Driving
- **arXiv**: [https://arxiv.org/abs/2505.19239](https://arxiv.org/abs/2505.19239)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

DriveX 鏄竴涓嚜鐩戠潱涓栫晫妯″瀷锛屾棬鍦ㄤ粠澶ц妯￠┚椹惰棰戜腑瀛︿範鍙硾鍖栫殑鍦烘櫙鍔ㄥ姏瀛﹀拰鍏ㄩ潰琛ㄧず锛堝嚑浣曘€佽涔夈€佽繍鍔級锛岃В鍐充换鍔′笓鐢ㄦā鍨嬪湪鍒嗗竷澶栧満鏅腑娉涘寲鎬т笉瓒崇殑闂銆備换鍔′笓鐢ㄦā鍨嬪洜浼樺寲鐩爣鐙獎鍜屽鏄傝吹鏍囨敞鏁版嵁鐨勪緷璧栵紝寰€寰€鍦ㄦ湭瑙佽繃鐨勫満鏅腑琛ㄧ幇涓嶄匠銆侱riveX 寮曞叆Omni Scene Modeling锛圤SM锛夋ā鍧楋紝缁熶竴浜嗗妯℃€佺洃鐫ｂ€斺斿D 鐐逛簯棰勬祴銆?D 璇箟琛ㄧず鍜屽浘鍍忕敓鎴愨€斺€旀潵鎹曡幏瀹屾暣鐨勫満鏅紨鍖栥€備负绠€鍖栧鏉傚姩鎬佸涔狅紝DriveX 鎻愬嚭瑙ｈ€︾殑娼滃湪涓栫晫寤烘ā绛栫暐锛氬皢涓栫晫琛ㄧず瀛︿範涓庢湭鏉ョ姸鎬佽В鐮佸垎绂伙紝骞堕€氳繃鍔ㄦ€佹劅鐭ュ皠绾块噰鏍凤紙Dynamic-Aware Ray Sampling锛夊寮鸿繍鍔ㄥ缓妯°€傚湪妯″瀷杩佺Щ鏂归潰锛孎uture Spatial Attention锛團SA锛変綔DriveX 鐨勯娴嬩腑鍔ㄦ€佽仛鍚堟椂绌虹壒寰侊紝涓轰笅娓镐换鍔＄壒瀹氱殑鎺ㄧ悊鎻愪緵澧炲己。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛欴riveX 晫Omni Scene Modeling (OSM) 妯″潡缁熶竴浜嗕笁绉嶄簰琛ョ殑鐩戠潱淇″彿妭1) 3D 鐐逛簯棰勬祴鈥斺€旂敤 LiDAR 鐐逛簯鐨勬湭鏉ュ抚浣滀负鍑犱綍鐩戠潱锛?2) 2D 璇箟琛ㄧず鈥斺€旂敤璇箟鍒嗗壊鐨勬湭鏉ュ抚浣滀负璇箟鐩戠潱锛?3) 鍥惧儚鐢熸垚鈥斺€旂敤鏈潵 RGB 甯т綔涓鸿瑙夌洃鐫ｃ€傝繖绉嶅妯℃€佸叏鏅洃鐫ｄ娇涓栫晫琛ㄧず鍚屾椂鎹曡幏鍑犱綍銆佽涔夊拰瑙嗚涓変釜缁村害鐨勫満鏅俊鎭€?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛欴riveX 閲囩敤瑙ｈ€︾殑娼滃湪涓栫晫寤烘ā绛栫暐锛氫笘鐣岃〃绀哄涔犻樁娈靛湪娼滃湪绌洪棿涓紪鐮佸満鏅姸鎬佸拰婕斿寲锛涙湭鏉ョ姸鎬佽В鐮侀樁娈典粠瀛﹀埌鐨勪笘鐣岃〃绀轰腑瑙ｇ爜涓哄叿浣撶礌3D 鐐逛簯銆佽涔夊浘鍥RGB 鍥惧儚銆傝В鑰﹁璁′娇涓栫晫琛ㄧず瀛︿範涓撴敞浜庢崟鑾烽珮閫氶噺銆佹娊璞＄殑鍦烘櫙鍔ㄦ€侊紝鑰屼笉蹇呮媴蹇冨叿浣撴ā鎬佺殑瑙ｇ爜缁嗚妭銆傚姩鎬佹劅鐭ュ皠绾块噰鏍烽拡瀵硅繍鍔ㄥ尯鍩燂紙鑰岄潪鍏ㄥ満鏅潎鍖€閲囨牱锛夊寮哄皠绾块噰鏍峰瘑搴︼紝鎻愬崌瀵硅繍鍔ㄧ墿浣撶殑寤烘ā绮惧害。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛氶€氳噦Future Spatial Attention锛團SA锛夛紝DriveX 鐨勯娴嬭兘鍔涘彲浠ヨ鏃犵紳闆嗘垚鍒颁笅娓镐换鍔′腑銆侳SA 由 DriveX 瀵规湭鏉ュ満鏅殑棰勬祴涓姩鎬佽仛鍚堟椂绌虹壒寰侊紝骞舵敞鍏ュ埌涓嬫父浠诲姟缃戠粶锛堝鍗犵敤棰勬祴銆佹祦浼拌銆佺鍒扮瑙勫垝锛夌殑鍏抽敭灞備腑锛屾彁敤棰勬祴鏈潵鈫掕緟鍔╁綋鍓嶅喅绛?鐨勮兘鍔涖€?
### 浠ｇ爜瀹炵幇瑕佺偣

- **OSM 妯″潡**锛氫笁鍚堜竴澶氭ā鎬佺洃鐫ｂ€斺€?D 鐐逛簯棰勬祴+ 2D 璇嗗+ RGB 鍥惧儚閲嶅缓
- **瑙ｈ€︿笘鐣屽缓存*锛氱紪鐮佸櫒锛堜笘鐣岃〃绀猴級涓庤В鐮佸櫒锛堟ā鎬佽緭鍑猴級鍒嗙
- **鍔ㄦ€佹劅鐭ュ皠绾块噰鏍?*锛氬熀浜庤繍鍔ㄤ及璁℃帺鐮佽嚜閫傚簲閲囨牱杩愬姩鍖哄煙
- **FSA 閫傞厤鍣?*锛氬嵆鎻掑嵆鐢ㄧ殑涓嬫父閫傞厤鍣紝鑱氬湪World Model 棰勬祴鐗瑰緛

### 鍏抽敭鍒涙柊。
- **鍏ㄦ櫙鍦烘櫙寤烘ā (OSM)**锛氱粺涓€鍑犱綍銆佽涔夈€佽瑙変笁缁村害鐩戠潱- **瑙ｈ€︾殑涓栫晫寤烘ā**锛氳〃绀哄涔犱笌妯℃€佽В鐮佸垎绂伙紝闄嶄綆瀛︿範闅惧害
- **鍔ㄦ€佹劅鐭ラ噰鏍*锛氳仛鐒﹁繍鍔ㄥ尯鍩熺殑灏勭嚎閲囨牱澧炲己鍔ㄦ€佸缓存- **FSA 涓嬫父閫傞厤**锛氬嵆鎻掑嵆鐢ㄧ殑棰勬祴鐗瑰緛闆嗘垚鏂规模- **澶氫换鍔?SOTA**锛氬崰鐢ㄩ娴嬨€佹祦浼拌銆佺鍒扮椹鹃┒绛夐棶棰樹笂杈惧埌鏈€。

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
