---
title: "World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model"
design: "World4Drive"
arxiv: https://arxiv.org/abs/2507.00603
github: https://github.com/ucaszyp/World4Drive
---

# World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model

::: info 璁烘枃淇℃伅
- **Design**: World4Drive
- **璁烘枃鍏ㄧ抽*: World4Drive: End-to-End Autonomous Driving via Intention-aware Physical Latent World Model
- **arXiv**: [https://arxiv.org/abs/2507.00603](https://arxiv.org/abs/2507.00603)
- **GitHub**: [https://github.com/ucaszyp/World4Drive](https://github.com/ucaszyp/World4Drive)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

World4Drive 鏄竴涓鍒扮鑷姩椹鹃┒妗嗘灦锛屽彂琛ㄤ簬 ICCV 2025锛屾牳蹇冪洰鏍囨槸瀹炵幇鎰熺煡鏍囨敞鍏嶈�?鐨勭鍒扮瑙勫垝銆傜幇鏈夌鍒扮鑷姩椹鹃┒鏂规硶鐩存帴浠庝紶鎰熷櫒鏁版嵁鐢熸垚瑙勫垝杞ㄨ抗锛屼絾閫氬父渚濊禆鏄傝吹鐨勬劅鐭ョ洃鐫ｏ紙妫€娴嬫銆佽涔夊垎鍓茬瓑锛夋潵鎻愬彇鍦烘櫙淇℃伅銆俉orld4Drive 鎻愬嚭鍒╃敤瑙嗚鍩虹妯″瀷鏋勫缓娼滃湪涓栫晫妯″瀷锛屼互鑷洃鐫ｆ柟寮忕敓鎴愬拰璇勪及澶氭ā鎬佽鍒掕建杩光€斺€斿畬鍏ㄤ笉闇€瑕佷汉宸ユ劅鐭ユ爣娉ㄣ€傚叿浣撴祦绋嬶細棣栧厛鎻愬彇鍖呭惈椹鹃┒鎰忓浘鍜岀┖闂磋涔夊厛楠岀殑娼滃湪涓栫晫琛ㄧず锛堢敱瑙嗚鍩虹妯″瀷鎻愪緵鍏堥獙锛夛紝鐒跺悗鍩轰簬褰撳墠鍦烘櫙鐗瑰緛鍜岄┚椹舵剰鍥剧敓鎴愬妯℃€佽鍒掕建杩癸紝骞跺湪娼滃湪绌洪棿涓娴嬪鏉¤建杩瑰搴旂殑鏈潵鐘舵€侊紝鏈€鍚庡紩鍏ヤ笘鐣屾ā鍨嬮€夋嫨鍣ㄨ瘎浼板苟閫夋嫨鏈€浣宠建杩广€傚簲NuScenes 寮€鐜 NavSim 闂幆鍩哄噯涓婅揪鍒?SOTA锛孡2 璇樊鐩稿闄嶄綔18.1%锛岀鎾炵巼闄嶄綔46.7%锛岃缁冩敹鏁涢€熷害蹇?3.75 鍊嶃。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歐orld4Drive 浣跨敤瑙嗚鍩虹妯″瀷锛圴FM锛屽櫒DINOv2锛変綔涓鸿瑙夌紪鐮侀骞诧紝鎻愬彇瀵屽惈绌洪棿璇箟鍏堥獙鐨勫満鏅壒寰併€備笌闇€瑕佷汉宸ユ爣娉ㄧ洃鐫ｇ殑浼犵粺鎰熺煡缂栫爜鍣ㄤ笉鍚岋紝VFM 鎻愪緵浜嗘棤闇€鏍囨敞鐨勫己瑙嗚鐗瑰緛銆傞┚椹舵剰鍥撅紙濡傜洿琛屻€佸乏杞€佸彸杞級浣滀负棰濆鏉′欢淇″彿。
**Knowledge Learning锛堢煡璇嗗涔狅級*锛歐orld4Drive 鐨勬牳蹇冨涔犳槸娼滃湪涓栫晫妯″瀷鈥斺€斿畠鍦ㄦ綔鍦ㄧ┖闂翠腑棰勬祴缁欏畾杞ㄨ抗灏嗗鑷寸殑鏈潵鍦烘櫙鐘舵€併€傚叧閿殑鑷洃鐫ｅ涔犱俊鍙锋潵鑷細鐪熷疄鏈潵瑙傛祴涓庝粠娼滃湪绌洪棿閲嶅缓鐨勯娴嬭娴嬩箣闂寸殑瀵归綈銆傚妯℃€佽建杩硅鍒掑櫒鐢熸垚澶氭潯鍊欓€夎建杩癸紝姣忔潯杞ㄨ抗閫氳繃涓栫晫妯″瀷鍦ㄦ綔鍦ㄧ┖闂翠腑棰勬祴鍏跺搴旂殑鏈潵缁撴灉銆備笘鐣屾ā鍨嬮€夋嫨鍣ㄦ瘮杈冭繖浜涢娴嬬殑鏈潵鐘舵€侊紝閫夋嫨鏈€浣宠建杩光€斺€斿疄�?鐢熸垚鈫掗娴嬧啋璇勪及鈫掗€夋嫨鐨勭鍒扮鍐崇瓥闂幆。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歐orld4Drive 在 NuScenes锛堝紑鐜級銆NavSim锛堥棴鐜級涓や釜浜掕ˉ鐨勫熀鍑嗕笂楠岃瘉浜嗘€ц兘銆傚湪闂幆璇勪及涓紝涓栫晫妯″瀷閫夋嫨鍣ㄧ殑瑙掕壊鏇翠负鍏抽敭鈥斺€斿畠闇€瑕佸湪楂樺害涓嶇‘瀹氱殑鏈潵涓娴嬪拰璇勪及涓嶅悓鍐崇瓥鐨勫悗鏋滐紝鐒跺悗鍋氬嚭鏈€浼橀€夋嫨銆傝缁冩敹鏁涢€熷害蹇3.75 鍊嶏紝浣?World4Drive 鍦ㄥぇ瑙勬ā閮ㄧ讲涓叿鏈夊疄闄呭彲琛屾€с。
### 浠ｇ爜瀹炵幇瑕佺偣

- **VFM 瑙嗚缂栫爜**锛欴INOv2 绛夎瑙夊熀纭€妯″瀷鏇夸唬闇€鏍囨敞鐩戠潱鐨勬劅鐭ョ紪鐮佸湪- **娼滃湪涓栫晫妯″瀷*锛氬湪娼滃湪绌洪棿涓娴嬭建杩规潯浠跺満鏅紨鍖?- **澶氭ā鎬佽建杩硅鍒掑櫒*锛氱敓鎴愬鏉″€欓€夎建杩癸紙鐩磋/宸﹁殑鍙宠浆鍙婂井璋冨彉浣擄級
- **涓栫晫妯″瀷閫夋嫨銆*锛氭瘮杈冮娴嬫湭鏉ョ姸鎬佸苟閫夋嫨鏈€浼樿建杩?- **鑷洃鐫ｅ紙*锛氱湡瀹炴湭鏉ヨ娴嬩笌閲嶅缓棰勬祴涔嬮棿鐨勫榻愭崯�?- **GitHub 寮€曞*

### 鍏抽敭鍒涙柊。
- **鏃犳劅鐭ユ爣娉ㄧ鍒扮瑙勫垝*锛氬埄鐢?VFM 鍜岃嚜鐩戠潱瀛︿範褰诲簳缁曡繃浜哄伐鏍囨敞闇€姹?- **涓栫晫妯″瀷椹卞姩杞ㄨ抗璇勪及**锛氭綔鍦ㄧ┖闂翠腑鐨?鐢熸垚棰勬祴璇勪氦閫夋嫨鍐崇瓥闂幆
- **澶氱淮楂樻晥**锛歀2 璇樊鈫?8.1%锛岀鎾炵巼 46.7%锛岃缁冨揩 3.75鍙- **ICCV 2025** 鍙戣。

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
