---
title: "Neural volumetric world models for autonomous driving"
design: "NeMo"
website: https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf
---

# NeMo: Neural volumetric world models for autonomous driving

::: info 璁烘枃淇℃伅
- **Design**: NeMo
- **璁烘枃鍏ㄧ抽*: Neural volumetric world models for autonomous driving
- **Website**: [https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/02571.pdf)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

NeMo (Neural Volumetric World Models) 鏄竴绉嶅熀浜庝綋绉〃绀猴紙volumetric representation锛夌殑绔埌绔嚜鍔ㄩ┚椹跺涔犳柟娉曪紝鍙戣〃浜?ECCV 2024銆傜幇鏈夎嚜鍔ㄩ┚椹舵劅鐭ュ拰瑙勫垝鏂规硶涓昏渚濊�?2D BEV 绌洪棿琛ㄧず锛屽湪鐪熷疄 3D 涓栫晫涓潰瀵归伄鎸°€侀儴鍒嗗彲瑙傛祴銆佺粏寰繍鍔ㄥ拰涓嶅悓鍦板舰鏃讹紝闅句互鍏呭垎寤烘ā杩愬姩鐗规€у拰鍐崇瓥銆侼eMo 鐨勬牳蹇冩礊瀵熸槸锛欱EV 枃3D 淇℃伅鍘嬬缉�?2D 骞抽潰锛屼涪澶变簡楂樺害缁村害鐨勯噸瑕佷俊鎭€斺€斾緥濡備笉鍚屽湴褰㈤珮搴﹀拰鐗╀綋鐨勭珛浣撶粨鏋勩€侼eMo 鎻愬嚭鍩轰簬 3D 浣撶礌琛ㄧず鐨勪笘鐣屾ā鍨嬶紝鍙€氳繃鑷洃鐫ｆ柟寮忚缁冧簬鍥惧儚閲嶅缓鍜屽崰鐢ㄩ娴嬩换鍔★紝浠庤€屽鍒版洿绮剧‘鐨?4D 浣撶Н琛ㄧず銆侻otion Flow 妯″潡晫Temporal Attention 妯″潡杩涗竴姝ュ寮轰簡瀵瑰姩鎬佸満鏅殑寤烘ā鍜岄娴嬩俊鎭湪瑙勫垝涓殑闆嗘垚銆?
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歂eMo 浠庡瑙嗗浘鍥惧儚涓瀯寤?3D 浣撶Н琛ㄧず锛?D 浣撶礌缃戞牸锛夛紝淇濈暀瀹屾暣鐨勭┖闂村嚑浣曚俊鎭€備涓BEV 涓嶅悓锛屼綋绱犵綉鏍间繚鐣欎簡楂樺害缁村害鐨勪俊鎭紝浣挎ā鍨嬭兘澶熸劅鐭ヨ矾闈㈠潯搴︺€佺墿浣撻珮搴﹀拰绔嬩綋閬尅绛?3D 鐗规€с€備綋绉紪鐮佸櫒閫氳嚜Lift-Splat-Shoot 鎴栧彲寰綋绉覆鏌撶瓑鏂瑰紡灏?2D 鍥惧儚鐗瑰緛鎻愬崌鍒?3D 绌洪棿銆?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛歂eMo 閫氳繃涓や釜鑷洃鐫ｄ换鍔″涔狅锛1) 鍥惧儚閲嶅缓鈥斺€斿皢浣撶Н琛ㄧず娓叉煋鍥?2D 鍥惧儚骞朵笌鍘熷杈撳叆瀵规瘮锛岃揩浣夸綋绉〃绀轰繚鐣欎赴瀵岀殑瑙嗚淇℃伅锛?2) 鍗犵敤棰勬祴鈥斺€旈娴?3D 绌洪棿涓殑鍗犳嵁鐘舵€侊紝鎻愪緵鍑犱綍鐩戠潱銆侻otion Flow 妯″潡鏄惧紡浼拌鍦烘櫙涓偣锛3D 杩愬姩鍦猴紝棰濆鎻愪緵鏃跺簭涓€鑷存€х洃鐫ｃ€俆emporal Attention 妯″潡鍦ㄥ墠鍚戣鍒掓椂铻嶅悎棰勬祴鐨勬湭鏉ヤ綋绉壒寰侊紝浣胯鍒掑喅绛栧鏈潵鍦烘櫙婕斿寲鏈夐瑙佹€с€?
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歂eMo 浣滀负绔埌満sensorimotor 鏅鸿兘浣撯€斺€斾粠鍘熷浼犳劅鍣ㄨ緭鍏ョ洿鎺ヨ緭鍑鸿鍒掑姩浣溿€傚湪 NuScenes 在 CARLA 鍩哄噯涓婏紝NeMo 瀹炵幇浜嗚秴瓒婂厛鍓嶅熀绾挎柟娉曡秴堢18% 煡L2 璇樊闄嶄綆銆傚熀浜庤嚜鐩戠潱瀛︿範鐨勪綋绉笘鐣屾ā鍨嬩娇 NeMo 鑳藉鍦ㄥぇ瑙勬ā鏃犳爣娉ㄦ暟鎹笂棰勮缁冿紝鍐嶉€氳繃妯′豢瀛︿範寰皟閮ㄧ讲銆?
### 浠ｇ爜瀹炵幇瑕佺偣

- **3D 浣撶礌琛ㄧず**锛氫娇鐢?3D 浣撶礌缃戞牸鑰岄娴2D BEV锛屼繚鐣欓珮搴︾淮搴︿俊晫- **Motion Flow 妯″潡**锛氶娴?3D 鍦烘櫙娴侊紝寤烘ā鍔ㄦ€佺墿浣撶殑杩愬姩鍦?- **Temporal Attention**锛氬湪瑙勫垝涓瀺鍚堟湭鏉ヤ綋绉壒寰侊紝澧炲己棰勬祴鎬ц鍒?- **鑷洃鐫ｅ弻浠诲姟*锛氬浘鍍忛噸锛+ 鍗犵敤棰勬祴鐨勮仈鍚堣瑙- **鏁版嵁闆?*锛歂uScenes 在 CARLA

### 鍏抽敭鍒涙柊。
- **3D 浣撶Н涓栫晫妯″瀷*锛氫箟BEV 鍗囩骇鍒板叏 3D 浣撶礌锛屼繚鐣欓珮搴︾淮搴︾粨鏋勪俊綔- **Motion Flow 鍦烘櫙娴?*锛氭樉寮?3D 杩愬姩鍦哄缓妯″鏉傚姩鎬佸満鏅- **棰勬祴鎬ц鍒?*锛歍emporal Attention 铻嶅悎鏈潵浣撶Н棰勬祴杈呭姪鍐崇殑- **鑷洃鐫?+ 妯′豢瀛︿範*锛氬彲鎵╁睍鐨勮缁冭寖煡- **NL_2 璇樊闄嶄綆 >18%**


## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
