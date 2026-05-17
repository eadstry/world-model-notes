---
title: "OccProphet: Pushing Efficiency Frontier of Camera-Only 4D Occupancy Forecasting with Observer-Forecaster-Refiner Framework"
design: "OccProphet"
arxiv: https://arxiv.org/abs/2502.15180
github: https://github.com/JLChen-C/OccProphet
---

# OccProphet: Pushing Efficiency Frontier of Camera-Only 4D Occupancy Forecasting with Observer-Forecaster-Refiner Framework

::: info 璁烘枃淇℃伅
- **Design**: OccProphet
- **璁烘枃鍏ㄧ抽*: OccProphet: Pushing Efficiency Frontier of Camera-Only 4D Occupancy Forecasting with Observer-Forecaster-Refiner Framework
- **arXiv**: [https://arxiv.org/abs/2502.15180](https://arxiv.org/abs/2502.15180)
- **GitHub**: [https://github.com/JLChen-C/OccProphet](https://github.com/JLChen-C/OccProphet)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

OccProphet 鏄竴涓珮鏁堢殑绾涓4D 鍗犵敤棰勬祴妗嗘灦锛屽彂琛ㄤ锛ICLR 2025銆傚崰鐢ㄩ娴嬮€氳繃瑙傚療鍘嗗浘2D 鍥惧儚棰勬祴鏈涓3D 鍗犳嵁鐘舵€侊紝瀵硅嚜鍔ㄩ┚椹跺畨鍏ㄨ嚦鍏抽噸瑕併€傜劧鑰岀幇鏈夋柟娉曡绠楅渶姹傚法澶э紝鍦ㄨ缁冨拰鎺ㄧ悊闃舵鏁堢巼浣庝笅锛岄毦浠ラ儴缃插埌杈圭紭璁惧銆侽ccProphet 閫氳繃涓変釜杞婚噺绾х粍浠垛€斺€擮bserver锛堣瀵熷櫒锛夈€丗orecaster锛堥娴嬪櫒锛夊寮Refiner锛堢簿鐐煎櫒锛夆€斺€斾互鏋佷綆璁＄畻鎴愭湰瀹炵幇楂樻晥鍗犵敤棰勬祴銆侽bserver 浣跨敤鎻愬嚭�?Efficient 4D Aggregation with Tripling-Attention Fusion �?3D 澶氬抚浣撶礌涓彁鍙栨椂绌虹壒寰侊紱Forecaster �?Refiner 鍒嗗埆鏈夋潯浠跺湴棰勬祴鍜岀簿缁嗕紭鍖栨湭鏉ュ崰鐢ㄦ帹鐞嗐€傜浉 SOTA 鏂规硶Cam4DOcc锛孫ccProphet 闄嶄綆58%~78% 璁＄畻鎴愭湰骞跺疄鐜?2.6彲鎺ㄧ悊鍔犻€燂紝鍚屾椂鐩稿棰勬祴绮惧害鎻愬姩4%~18%。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歄bserver 妯″潡浣跨域Efficient 4D Aggregation 浠庡甯?3D 浣撶礌涓彁鍙栨椂绌虹壒寰併€俆ripling-Attention Fusion 鏄牳蹇冨垱鏂扳€斺€斿畠鍦ㄤ笁涓淮搴︼紙绌洪棿楂樺害銆佺┖闂村搴︺€佹椂闂达級涓婂垎鍒簲鐢ㄦ敞鎰忓姏鏈哄埗锛岀劧鍚庤瀺鍚堜笁缁村害鐗瑰緛銆傝繖绉嶅垎瑙ｆ敞鎰忓姏姣斿悓4D 娉ㄦ剰鍔涙樉钁楅檷浣庤绠楀鏉傚害锛屽悓鏃朵繚鐣欎簡璺ㄦ椂绌虹殑鐗瑰緛浜や簰鑳藉姏。
**Knowledge Learning锛堢煡璇嗗涔狅級*锛欶orecaster 紝Observer 鎻愬彇鐨勬椂绌虹壒寰佷负鏉′欢锛岄娴嬫湭鏉ュ抚鐨?3D 鍗犵敤鍒嗗竷銆俁efiner 由 Forecaster 鐨勫垵濮嬮娴嬭繘琛岀簿缁嗗寲鈥斺€斾娇鐢ㄨ交閲忕骇鍗风Н鎴栨敞鎰忓姏缃戠粶濉ˉ棰勬祴涓殑涓嶄竴鑷村拰缁嗚妭缂哄け銆傛暣涓鏋朵互绾瑙夎緭鍏ャ€佸崰鐢ㄤ吉鐪熷€肩洃鐫ｇ殑绔埌绔柟寮忚缁冦€傝交閲忕骇璁捐鐨勫叧閿湪浜庡湪姣忎釜缁勪欢涓兘绮惧績鏉冭　浜嗘晥鐜囦笌绮惧害銆?
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歄ccProphet 在 NuScenes銆丩yft-Level5 涓NuScenes-Occupancy 涓変釜鏁版嵁闆嗕笂楠岃瘉锛屽睍鐜颁簡璺ㄦ暟鎹泦鐨勬硾鍖栬兘鍔涖€傛瀬楂樼殑璁＄畻鏁堢巼浣垮叾鐗瑰埆閫傚悎閮ㄧ讲鍒拌祫婧愬彈闄愮殑杈圭紭鑷姩椹鹃┒骞冲彴锛屽疄鐜板疄鏃?4D 鍗犵敤棰勬祴。
### 浠ｇ爜瀹炵幇瑕佺偣

- **Tripling-Attention Fusion**锛氬湪4D (绌洪棿HW + 鏃堕柟T) 娉ㄦ剰鍔涘垎瑙ｄ夌H銆乄銆乀 涓夌淮搴︾殑椤哄簭鎴栧苟琛屾敞鎰忓姏
- **Observer-Forecaster-Refiner 涓変欢濂?*锛歄bserver 鎻愬彇鐗瑰緛 銆Forecaster 绮楅娴?嬬Refiner 绮剧粏鍖?- **杞婚噺绾ц璁?*锛氬叏娴佺▼鍙傛暟鍜?FLOPs 鍧囧ぇ骞呯缉�?- **寮€婧愪唬鐮?*锛欸itHub 鍏。
### 鍏抽敭鍒涙柊。
- **Tripling-Attention Fusion**锛氬浘H銆乄銆乀 涓変釜缁村害涓婂垎瑙ｆ敞鎰忓姏锛屽ぇ骞呴檷浣?4D 娉ㄦ剰鍔涜绠楁垚鏈?- **O-F-R 涓夐儴鏇叉灦鏋*锛歄bserver锛堢壒寰佹彁鍙栵紙 Forecaster锛堥娴嬶級+ Refiner锛堢簿鐐硷級锛屾竻鏅板垎噯- **鏁堢殑绮惧害鍙岀獊鐮?*旂8%~78% 璁＄畻鑺傜渷 + 4%~18% 绮惧害鎻愬崌
- **ICLR 2025 accepted**


## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
