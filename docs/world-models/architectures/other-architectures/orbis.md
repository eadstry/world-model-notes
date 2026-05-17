---
title: "Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models"
design: "Orbis"
arxiv: https://arxiv.org/abs/2507.13162
github: https://github.com/lmb-freiburg/orbis
---

# Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models

::: info 璁烘枃淇℃伅
- **Design**: Orbis
- **璁烘枃鍏ㄧ抽*: Orbis: Overcoming Challenges of Long-Horizon Prediction in Driving World Models
- **arXiv**: [https://arxiv.org/abs/2507.13162](https://arxiv.org/abs/2507.13162)
- **GitHub**: [https://github.com/lmb-freiburg/orbis](https://github.com/lmb-freiburg/orbis)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

Orbis 鏄竴涓簲瀵归┚椹朵笘鐣屾ā鍨嬮暱鏃跺煙棰勬祴鎸戞垬鐨勬鏋讹紝鏉ヨ嚜寮楄幈鍫″ぇ瀛︺€傜幇鏈夎嚜鍔ㄩ┚椹朵笘鐣屾ā鍨嬪湪闀挎椂鍩熺敓鎴愬拰瀵规寫鎴樻€у満鏅殑娉涘寲涓婅〃鐜颁笉浣炽€侽rbis 鐨勬牳蹇冪悊蹇垫�?绠€绾﹁嚦涓?鈥斺€斾粎浣跨敤绠€鍗曠殑璁捐閫夋嫨锛屼笉寮曞叆棰濆鐨勭洃鐫ｄ俊鍙锋垨浼犳劅鍣紙濡傞珮娓呭湴鍥俱€佹繁搴︺€佸鎽勫儚澶达級锛屼粎鍙469M 鍙傛暟鍜?280 灏忔椂瑙嗛鏁版嵁璁粌鍗宠揪鍒?SOTA 鎬ц兘銆傜壒鍒湪鍥伴毦鍦烘櫙锛堝杞集鎿嶄綔銆佸煄甯備氦閫氾級涓〃鐜扮獊鍑恒€傛澶栵紝Orbis 杩涜浜嗙被token vs 杩炵画娴佸尮閰嶇殑骞舵帓瀵规瘮瀹為獙锛岃璁′簡涓€绉嶅彲鐢ㄤ簬涓ょ鑼冨紡鐨勬贩鍚?tokenizer銆傜粨璁烘槸杩炵画鑷洖褰掓ā鍨嬭儨鍑衡€斺€斿璁捐閫夋嫨鏇撮瞾妫掍笖琛ㄧ幇鏇村己。
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歄rbis 浣跨敤娣峰悎 tokenizer锛屽皢瑙嗛甯х紪鐮佷负鏃㈠彲浠ョ鏁ｅ寲锛token 搴忓垪锛堢敤浜庣鏁ｈ嚜鍥炲綊Transformer锛夛紝涔熷彲浠ヤ綔涓鸿繛缁綔鍦ㄥ悜閲忥紙鐢ㄤ簬娴佸尮閰嶆垨杩炵画鑷洖褰掞級鐨勮〃绀恒€傝繖绉嶆贩鍚堣璁′娇鐮旂┒鑳藉鍏钩瀵规瘮绂绘暎鍜岃繛缁袱绉嶇敓鎴愯寖寮忋。
**Knowledge Learning锛堢煡璇嗗涔狅級*锛歄rbis 浠呬娇鐢ㄥ崟鐩憚鍍忓ご瑙嗛浣滀负杈撳叆锛屾棤鍦板浘銆佹棤娣卞害銆佹棤澶氭憚鍙69M 鍙傛暟鍦?280 灏忔椂椹鹃┒瑙嗛涓婅缁冦€傝繛缁嚜鍥炲綊锛坈ontinuous autoregressive锛夋ā鍨嬪湪姣忎釜鏃堕棿姝ラ娴嬭繛缁綔鍦ㄥ悜閲忥紝鑰岄潪绂绘暎 token鈥斺€旇繖閬垮厤浜嗛噺鍖栬宸殑绱Н銆傜爺绌跺彂鐜拌繛缁ā鍨嬪璁捐閫夋嫨锛堝 tokenizer 澶у皬銆佹灦鏋勬繁搴︾瓑锛夋洿涓洪瞾妫掋€傜壒鍒湪杞集鍜屽煄甯備氦閫氱瓑澶嶆潅椹鹃┒鍦烘櫙涓紝Orbis 灞曠幇浜嗕紭浜庣鏁ｆā鍨嬪拰鍚岀被鏂规硶鐨勬€ц兘。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歄rbis 浠ヨ嚜杞︿綅濮垮彉鍖栬建杩逛负鏉′欢杩涜鏈潵甯ч娴嬨€傚湪闀挎椂鍩熸祴璇曚腑锛堝澶氭 rollout锛夛紝杩炵画妯″瀷鐩告瘮绂绘暎妯″瀷琛ㄧ幇鍑烘洿灏戠殑璇樊绱Н鍜岃瑙夐€€鍖栥€傛ā鍨嬪湪杞集銆佸彉閬撱€佹嫢鍫电瓑鎸戞垬鎬ч┚椹跺満鏅腑淇濇寔浜嗙ǔ瀹氱殑鍦烘櫙涓€鑷存€у拰瑙嗚璐ㄩ噺。
### 浠ｇ爜瀹炵幇瑕佺偣

- **娣峰寲tokenizer**锛氬崟涓€缂栫爜鍣ㄦ敮鎸佺鏁ｅ寲锛堢煡token锛夊拰杩炵画鍖栵紙娼滃湪鍚戦噺锛変袱绉嶈緭鍑?- **杩炵画鑷洖**锛氭瘡姝ラ娴嬭繛缁綔鍦ㄥ悜閲忥紝閫氳繃娼滃湪瑙ｇ爜鍣ㄨ繕鍘熶负鍥惧儚
- **杞婚噺绾ц璁?*粌69M 鍙傛暟锛?80h 瑙嗛鏁版嵁锛屽崟鐩浉�?- **瀵规瘮瀹為獙*锛氱鏁?vs 杩炵画锛岀浉鍚?tokenizer 鐨勫叕骞冲。
### 鍏抽敭鍒涙柊。
- **绂绘殑vs 杩炵画瀹炶瘉瀵规硶*锛氶娆′娇鐢ㄦ贩鍚?tokenizer 杩涜鍏钩瀵规瘮锛岃繛缁ā鍨嬭儨鍑?- **绠€绾﹂珮鏁?*锛氭棤鍦板浘/娣卞�?澶氭憚鍍忓ご皯69M 鍙傛暟SOTA
- **鎸戞垬鍦烘櫙浼樺寲*锛氳浆寮€佸煄甯備氦閫氱瓑鍥伴毦鍦烘櫙涓嬭〃鐜扮獊鍑- **杩炵画妯″瀷椴佹灦*锛氳瘉鏄庤繛缁嚜鍥炲綊姣旂鏁?token 鏇撮瞾妫?

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
