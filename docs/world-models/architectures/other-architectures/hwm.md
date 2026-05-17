---
title: "Humanoid World Models: Open World Foundation Models for Humanoid Robotics"
design: "HWM"
arxiv: https://arxiv.org/abs/2506.01182
---

# HWM: Humanoid World Models: Open World Foundation Models for Humanoid Robotics

::: info 璁烘枃淇℃伅
- **Design**: HWM
- **璁烘枃鍏ㄧ抽*: Humanoid World Models: Open World Foundation Models for Humanoid Robotics
- **arXiv**: [https://arxiv.org/abs/2506.01182](https://arxiv.org/abs/2506.01182)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

HWM (Humanoid World Models) 鏄竴绯诲垪杞婚噺绾с€佸紑婧愮殑浜哄舰鏈哄櫒浜轰笘鐣屾ā鍨嬶紝鏃ㄥ湪浠ュ鏈拰灏忓瀷瀹為獙瀹ゅ彲鐢ㄧ殑璁＄畻璧勬簮�?-2 GPU锛夎繘琛岃缁冨拰閮ㄧ讲銆備汉褰㈡満鍣ㄤ汉鍥犲叾绫讳汉褰㈡€佸ぉ鐒堕€傚悎鍦ㄤ汉绫荤幆澧冧腑浜や簰锛屼絾璁╀汉褰㈡満鍣ㄤ汉鍦ㄥ鏉傚紑鏀句笘鐣屼腑杩涜鎺ㄧ悊銆佽鍒掑拰琛屽姩浠嶇劧鏄噸澶ф寫鎴樸€備笘鐣屾ā鍨嬮€氳繃棰勬祴缁欏畾鍔ㄤ綔鐨勬湭鏉ョ粨鏋滐紝鍙互鏀寔闀挎椂鍩熻鍒掍腑鐨勫姩鎬佸缓妯″拰涓虹瓥鐣ュ涔犵敓鎴愬悎鎴愭暟鎹€侶WM 鐨勬牳蹇冭础鐚槸锛氬湪 100 灏忔椂浜哄舰鏈哄櫒浜烘紨绀烘暟鎹笂璁粌浜嗕袱绉嶇敓鎴愭ā鍨嬶紙Masked Transformer 鍒Flow-Matching锛夛紝骞舵帰绱簡涓嶅悓娉ㄦ剰鍔涙満鍒跺拰鍙傛暟鍏变韩绛栫暐鐨勬灦鏋勫彉浣撱€傚弬鏁板叡浜妧鏈噺灏戜綔33-53% 妯″瀷澶у皬锛屽鎬ц兘褰卞搷鏋佸皬。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛欻WM 浠ヤ汉褰㈡満鍣ㄤ汉鐨勮嚜鎴戜腑蹇冿紙egocentric锛夎棰戜綔涓鸿緭鍏ワ紝瑙嗚缂栫爜鍣ㄥ汉RGB 甯ф槧灏勪负娼滃湪 token 搴忓垪銆傚悓鏃舵帴鏀舵帶鍒token锛坈ontrol tokens锛変綔涓烘潯浠朵俊鍙凤紝缂栫爜鏈哄櫒浜虹殑鍏宠妭浣嶇疆銆佺洰鏍囨湯绔墽琛屽櫒濮挎€佺瓑。
**Knowledge Learning锛堢煡璇嗗涔狅級*锛欻WM 瀵规瘮浜嗕袱绉嶇敓鎴愯寖寮忥�?1) Masked Transformer鈥斺€斾娇鐢?masking 绛栫暐杩涜鑷洖褰掓垨鎺╃爜棰勬祴涓2) Flow-Matching鈥斺€斿涔犱粠鍣０鍒扮洰鏍囧抚鐨勬渶浼樹紶杈撹矾寰勩€傜爺绌朵簡涓嶅悓娉ㄦ剰鍔涙満鍒讹紙鍏ㄥ眬銆佸洜鏋溿€佸眬閮ㄧ獥鍙ｏ級瀵归娴嬭川閲忓拰璁＄畻鏁堢巼鐨勬潈琛°€傚弬鏁板叡浜瓥鐣ュ湪瑙嗚缂栫爜鍣ㄥ拰鏃跺簭棰勬祴鍣ㄤ腑鍏变韩鏉冮噸锛屽噺灏戝弬鏁伴噺 33-53%銆傛墍鏈夎缁冧粎闇瑕100 灏忔椂浜哄舰鏈哄櫒浜烘紨绀烘暟鎹。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛欻WM 鐨勮緭鍑烘槸浠ユ帶鍒朵俊鍙蜂负鏉′欢鐨勬湭鏉ヨ嚜鎴戜腑蹇冭棰戦娴嬨€傝繖鎰忓懗鐫€缁欏畾涓€涓満鍣ㄤ汉鎷熸墽琛岀殑鍔ㄤ綔璁″垝锛孒WM 鍙互鍙鍖?鎵ц璇ヨ鍒掑悗浼氬彂鐢熶粈涔堬紝浠庤€屾敮鎸侀暱鏃跺煙瑙勫垝锛堝皢 HWM 浣滀负鍙井妯℃嫙鍣ㄤ娇鐢級鍜屽悎鎴愭暟鎹敓鎴愶紙涓虹瓥鐣ュ涔犵敓鎴愬ぇ閲忎豢鐪熶氦浜掓暟鎹級銆傝交閲忕骇璁捐�?HWM 閫傜敤浜?1-2 GPU 鐨勫鏈幆澧冦。
### 浠ｇ爜瀹炵幇瑕佺偣

- **鍙岃寖寮?*锛歁asked Transformer + Flow-Matching锛屼袱绉嶆灦鏋勬彁渚涗笉鍚岀簿搴?鏁堢巼鏉冭　
- **鎺у埗 token 璋冨**锛氭満鍣ㄤ汉鎺у埗淇″彿閫氳繃AdaLN 璋冨埗鎴栦氦鍙夋敞鎰忓姏娉ㄥ叆瑙嗛鐢熸垚楠ㄥ共
- **鍙傛暟鍏变韩**锛氱紪鐮佸櫒鍜岃В鐮佸櫒灞備箣闂村叡浜潈閲嶏紝鍑忓皯 33-53% 鍙傛暟閲?- **灏忓瀷鍖栬兘*锛氬湪100 灏忔椂浜哄舰鏈哄櫒浜烘暟鎹�?1-2 GPU 鍗冲彲瀹屾垚璁粌

### 鍏抽敭鍒涙柊。
- **棣栦釜寮€婧愪汉褰笘鐣屾ā鍨?*锛氶潰鍚戜汉褰㈡満鍣ㄤ汉鐨勮交閲忕骇瑙嗛棰勬祴涓栫晫妯″瀷- **鍙屾灦鏋勫垝*锛歁asked Transformer vs Flow-Matching 鐨勫疄璇佹瘮锛- **鍙傛暟鍏变韩鍘嬬殑*殑3-53% 鍙傛暟鍑忓皯锛屾€ц兘鎹熷け鏋佷綆
- **浣庤祫婧愬弸鍙*鍙-2 GPU 鍙畬鎴愯缁冮儴缃?

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
