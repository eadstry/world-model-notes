---
title: "Graph World Model"
design: "GWM"
arxiv: https://arxiv.org/abs/2507.10539
github: https://github.com/ulab-uiuc/GWM
---

# GWM: Graph World Model

::: info 璁烘枃淇℃伅
- **Design**: GWM
- **璁烘枃鍏ㄧ抽*: Graph World Model
- **arXiv**: [https://arxiv.org/abs/2507.10539](https://arxiv.org/abs/2507.10539)
- **GitHub**: [https://github.com/ulab-uiuc/GWM](https://github.com/ulab-uiuc/GWM)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

GWM (Graph World Model) 鏄竴绉嶅皢涓栫晫妯″瀷鑼冨紡鎵╁睍鍒板浘缁撴瀯鏁版嵁鐨勬柊妗嗘灦銆傜幇鏈変笘鐣屾ā鍨嬩富瑕佸叧娉ㄩ潪缁撴瀯鍖栨暟鎹紙鍥惧儚銆佽棰戯級锛屾棤娉曞埄鐢ㄦ暟瀛椾笘鐣屼腑鏅亶瀛樺湪浣嗕互鍥惧舰寮忚〃绀虹殑涓板瘜缁撴瀯鍖栦俊鎭€傝櫧鐒跺凡鏈夊涓浘鍩虹妯″瀷琚彁鍑猴紝浣嗗畠浠仛鐒︿簬鍥惧涔犱换鍔★紝鏃犳硶鎵╁睍鍒板鏍峰寲鐨勫妯℃€佹暟鎹拰璺ㄥ绉戜换鍔°€侴WM 鐨勬牳蹇冨垱鏂版槸锛氶€氱敤娑堟伅浼犻€掔畻娉曡仛鍚堢粨鏋勫寲淇℃伅鈥斺€旇涔堝湪缁熶竴鐨勫妯℃瀷token 绌洪棿涓皢澶氭ā鎬佹暟鎹浆鎹负鏂囨湰锛圙WM-T锛夛紝瑕佷箞鍦ㄧ粺涓€鐨勫妯℃€佸祵鍏ョ┖闂翠腑浣跨敤妯℃€佷笓鐢ㄧ紪鐮佸櫒锛圙WM-E锛夈€傛洿閲嶈鐨勮础鐚槸寮曞叆鍔ㄤ綔鑺傜偣锛坅ction nodes锛夆€斺€斿皢澶氭牱鍖栦换鍔＄粺涓€琛ㄧず涓哄浘涓繛鎺ュ埌鍏朵粬鑺傜偣鐨勫姩浣滆妭鐐癸紙閫氳繃鐩存帴寮曠敤鎴栫浉浼煎害璁＄畻锛夛紝浣垮悓涓€妯″瀷鑳藉澶勭悊澶氭ā鎬佺敓鎴愬拰鍖归厤銆佹帹鑽愮郴缁熴€佸浘棰勬祴銆佸鏅鸿兘浣撴ā鎷熴€佹绱㈠寮虹敓鎴愪互鍙婅鍒掑拰浼樺寲绛夊叚绫诲畬鍏ㄤ笉鍚屽煙浠诲姟。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛欸WM 閫氳繃涓ょ鏂瑰紡澶勭悊澶氭ā鎬佹暟鎹細(1) GWM-T鈥斺€斿皢鍥惧儚銆佽棰戠瓑閫氳繃棰勮嚜VLM/鍥炬弿杩板櫒杞崲涓烘枃淇tokens锛屾墍鏈夋ā鎬佺粺涓€鍦ㄨ瑷�?token 绌洪棿涓紱(2) GWM-E鈥斺€斾娇鐢ㄦā鎬佷笓鐢ㄧ紪鐮佸櫒锛堝彲ViT for images, Graph Encoder for graphs锛夋槧灏勫埌缁熶竴鐨勫妯℃€佸祵鍏ョ┖闂淬€傝繖绉嶇伒娲绘€т娇 GWM 鑳藉鐞嗕粠瑙嗚鍒版枃鏈埌鍥剧殑浠绘剰缁勫悎杈撳叆銆?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛氶€氱敤娑堟伅浼犻€掔畻娉曟槸 GWM 鐨勮绠楁牳蹇冦€傚浘鑺傜偣闂寸殑淇℃伅閫氳繃娉ㄦ剰鍔涜竟锛坅ttention edges锛変紶閫掞紝浣嗕笌浼犵粺鍥剧缁忕綉缁滀笉鍚岋紝GWM 涓殑杈瑰彲浠ユ槸鍔ㄦ€佹瀯寤虹殑鈥斺€斿姩浣滆妭鐐归€氳繃鐩存帴寮曠敤锛堢‖杩炴帴锛夋垨鐩镐技搴﹁绠楋紙杞繛鎺ワ級涓庣浉鍏宠妭鐐瑰叧鑱斻€傝繖浣垮緱妯″瀷鍙互鑷姩瀛︿範鍝簺鑺傜偣闇€瑕佷氦浜掞紝鑰屼笉闇€瑕侀璁惧浘缁撴瀯銆備换鍔″鏍锋€ч€氳繃鍔ㄤ綔鑺傜偣瀹炵幇锛氫笉鍚屼换鍔¤瀹氫箟涓轰笉鍚岀殑鍔ㄤ綔鑺傜偣绫诲瀷锛屾ā鍨嬪涔犳牴鎹姩浣滆妭鐐圭被鍨嬫縺娲荤浉搴旂殑娑堟伅浼犻€掕矾寰勩€?
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛欸WM 鍦ㄥ叚绫昏法鍩熶换鍔′腑灞曠ず鑳藉姏�?1) 澶氭ā鎬佺敓鎴愬拰鍖归厤锛?2) 鎺ㄨ崘锛?3) 鍥鹃娴嬶紱(4) 澶氭櫤鑳戒綋妯℃嫙锛?5) 妫€绱㈠寮虹敓鎴愶堣6) 瑙勫垝鍜屼紭鍖栥€傚悓涓栫GWM 鍦ㄥ叾涓涓换鍔′笂杈惧埌鎴栬秴瓒婄壒瀹氬煙鍩虹嚎鏂规硶锛屽苟灞曠ず鍑哄鏂版湭瑙佷换鍔＄殑寮洪浂鏍锋氳灏戞牱鏈兘鍔涖€傝繖浣撶幇鏈GWM 浣滀负閫氱敤涓栫晫妯″瀷鍦ㄥ鏍峰寲鏁版嵁缁撴瀯涓婄殑娼滃姏銆?
### 浠ｇ爜瀹炵幇瑕佺偣

- **閫氱敤娑堟伅浼犻**锛歍ransformer-style attention + 鍔ㄦ€佽竟鏋勫缓锛屾敮鎸佺粨鏋勫寲涓庨潪缁撴瀯鍖栬妭鐐规贩鍚?- **鍔ㄤ綔鑺傜偣**锛氫换鍔″畾涔変负鍔ㄤ綔鑺傜偣锛屼笌鐩稿叧鑺傜偣閫氳繃鐩存帴寮曠敤鎴?embedding 鐩镐技搴﹁繛鎺?- **GWM-T / GWM-E**锛氫袱绉嶅妯℃€佽瀺鍚堢瓥鐣モ€斺€攖ext token 缁熶竴vs embedding 缁熶竴- **浠ｇ爜寮€婧?*锛欸itHub 鎻愪爜GWM 瀹炵。
### 鍏抽敭鍒涙柊。
- **鍥句笘鐣屾ā鍨嬫柊鑼冨**锛氶娆″皢涓栫晫妯″瀷鎵╁睍鍒板浘缁撴瀯鏁版嵁
- **鍔ㄤ綔鑺傜偣缁熶竴浠诲姟**锛氫互鍥剧殑鑺傜偣杈规満鍒剁粺涓€琛ㄨ揪澶氭牱鍖栦换规- **澶氭ā鎬佸浘寤烘櫙*锛氶€氳繃token 鍖栨垨宓屽叆缁熶竴澶勭悊浠绘剰妯℃€佽緭敮- **璺ㄥ煙闆舵牱鏈硾鍖?*锛氬湪鏈浠诲姟涓婂睍绀哄己杩佺Щ鑳藉。

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
