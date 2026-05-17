---
title: "ManiGaussian++: General Robotic Bimanual Manipulation with Hierarchical Gaussian World Model"
design: "ManiGaussian++"
arxiv: https://arxiv.org/abs/2506.19842
github: https://github.com/April-Yz/ManiGaussian_Bimanual
---

# ManiGaussian++: General Robotic Bimanual Manipulation with Hierarchical Gaussian World Model

::: info 璁烘枃淇℃伅
- **Design**: ManiGaussian++
- **璁烘枃鍏ㄧ抽*: ManiGaussian++: General Robotic Bimanual Manipulation with Hierarchical Gaussian World Model
- **arXiv**: [https://arxiv.org/abs/2506.19842](https://arxiv.org/abs/2506.19842)
- **GitHub**: [https://github.com/April-Yz/ManiGaussian_Bimanual](https://github.com/April-Yz/ManiGaussian_Bimanual)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

ManiGaussian++ 鏄潰鍚戦€氱敤鏈哄櫒浜哄弻鑷傛搷鎺х殑鍒嗗眰楂樻柉涓栫晫妯″瀷锛屾槸 ManiGaussian 妗嗘灦鐨勬墿灞曘€傚弻鑷傛搷鎺х浉姣斿崟鑷傛搷鎺ч潰涓寸嫭鐗规寫鎴橈細闇€瑕佺悊瑙ｅ浣擄紙鍙岃�?鐗╀綋锛夌殑鏃剁┖鍔ㄦ€佷氦浜掋€傜幇鏈夌殑 ManiGaussian 鏂规硶棣栨灏嗛珮鏂笘鐣屾ā鍨嬬敤浜庡崟鑷傛搷鎺э紝浣嗗拷瑙嗕簡鍙岃噦绯荤粺涓涓墽琛屼綋鐨勪氦浜掞紝鎬ц兘鏄捐憲涓嬮檷銆侻aniGaussian++ 閫氳繃鍒嗗眰楂樻柉涓栫晫妯″瀷涓殑棰嗗鑰?璺熼殢鑰咃紙Leader-Follower锛夋灦鏋勮В鍐宠繖涓€闂锛氶鍏堢敓鎴愪换鍔″鍚戠殑楂樻柉娉兼簠锛圙aussian Splatting锛夛紝鍖哄垎涓诲姩鑷傦紙acting arm锛夊拰绋冲畾鑷傦紙stabilizing arm锛夛紱鐒跺悗寤虹珛鍒嗗眰楂樻柉涓栫晫妯″瀷鈥斺€擫eader 棰勬祴绋冲畾鑷傝繍鍔ㄥ紩璧风殑楂樻柉鍙樺舰锛孎ollower 鍩轰簬姝ょ敓鎴愪富鍔ㄨ噦杩愬姩甯︽潵鐨勭墿鐞嗗悗鏋溿€傚湪10 涓豢鐪熶换鍔′腑瓒呰 SOTA 鏂规硶20.2%锛屽湪9 涓湡瀹炰笘鐣屼换鍔′腑骞冲潎鎴愬姛鐜囪揪鍒?60%。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歁aniGaussian++ 浠庝腑闂磋瑙夌壒寰侊紙鑰岄潪鐩存帴浠庡儚绱狅級鐢熸垚浠诲姟瀵煎悜鐨勯珮鏂臣婧呫€傚叧閿璁℃槸鍖哄垎鍙岃噦瑙掕壊鈥斺€斾富鍔ㄨ噦锛堟墽琛屼换鍔″鎶撳彇銆佺Щ鍔級鍜岀ǔ瀹氳噦锛堟敮鎾戝鍥哄畾鐗╀綋锛夈€傛瘡绉嶈鑹茬殑楂樻柉浣撳叿鏈変笉鍚岀殑杩愬姩灞炴€у厛楠屻€傚垎灞備笘鐣屾ā鍨嬬敱涓や釜鏃跺簭棰勬祴妯″潡缁勬垚锛歀eader 浠ョǔ瀹氳噦鍔ㄤ綔涓烘潯浠堕娴嬮珮鏂殑绌洪棿鍙樺舰锛汧ollower 浄Leader 杈撳嚭鍜屼富鍔ㄨ噦鍔ㄤ綔涓烘潯浠剁敓鎴愭渶缁堢殑鏈潵鍦烘櫙楂樻柉鍦恒€?
**Knowledge Learning锛堢煡璇嗗涔狅級*锛歁aniGaussian++ 鍦ㄥ寘鍚绉嶅弻鑷傛搷鎺т换鍔＄殑浠跨湡鏁版嵁涓婅缁冦€傚涔犵洰鏍囧寘鎷細鍦烘櫙閲嶅缓锛堥珮鏂覆盖vs 瑙傛祴锛夈€佹湭鏉ラ娴嬶紙棰勬祴鐨勯珮鏂満 vs 鏈潵甯э級銆佸拰鍔ㄤ綔瀛︿範锛堥€氳繃娓叉煋鐨勬湭鏉ュ満鏅瘎浼板姩浣滆川閲忥紝浣滀负绛栫暐瀛︿範鐨勫鍔变俊鍙凤級銆侺eader-Follower 鏋舵瀯閫氳繃鍥犳灉鍒嗚В闄嶄綆浜嗗涔犻毦搴︹€斺€斿厛寤烘ā绋冲畾鑷傗啋鐜鐨勫彉鍖栵紝鍐嶅缓妯′富鍔ㄨ噦鈫掔粨鏋滅殑鍙樺寲。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歁aniGaussian++ 鏃㈠彲鐢ㄤ簬鍔ㄤ綔绛栫暐瀛︿範锛堥€氳繃涓栫晫妯″瀷璇勪及鍊欓€夊姩浣滅殑鏈潵缁撴灉锛夛紝涔熷彲鐢ㄤ簬鍚堟垚浠跨湡鏁版嵁鐢熸垚銆傚湪浠跨域Bimanual Manipulation benchmark 鍜岀湡瀹炴満鍣ㄤ汉骞冲彴涓婄殑瀹為獙缁撴灉楠岃瘉浜嗗叾鍦ㄥ弻鑷傛搷鎺т换鍔′腑鐨勬硾鍖栬兘鍔涖。
### 浠ｇ爜瀹炵幇瑕佺偣

- **浠诲姟瀵煎悜楂樻柉鐢熸垚*锛氫粠瑙嗚鐗瑰緛鐢熸垚鍙岃鑹查珮鏂〃绀猴紙涓诲姩鑷?绋冲畾鑷傚垎绂伙紝- **Leader-Follower 鏃跺簭棰勬祴**锛氫袱闃舵鍥犳灉寤烘ā鈥斺€擫eader锛堢ǔ瀹氳噦褰卞搷锛夆�?Follower锛堜富鍔ㄨ噦褰卞搷锛?- **鍙井娓叉煋**锛氶珮鏂満娓叉煋鍥炲浘鍍忕敤浜庤嚜鐩戠殑- **寮€曞*锛欸itHub 鍏紑浠ｇ爜

### 鍏抽敭鍒涙柊。
- **鍙岃噦鍒嗗眰涓栫晫妯″瀷*锛歀eader-Follower 鏋舵瀯鍥犳灉鍒嗚В鍙岃噦浜や簰鍔ㄦ綔- **瑙掕壊鎰熺煡楂樻柉琛ㄧず**锛氬尯鍒嗕富鍔ㄨ噦鍜岀ǔ瀹氳噦鐨勯珮鏂繍鍔ㄥ睘鎬- **瓒呰 SOTA**锛氫豢鐪?+20.2%锛岀湡瀹炰笘鐣?60% 鎴愬姛鐜?- **楂樻柉涓栫晫妯″瀷鍦ㄥ浣撶郴缁熶笂鐨勯娆℃垚鍔熸墿灞?*


## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
