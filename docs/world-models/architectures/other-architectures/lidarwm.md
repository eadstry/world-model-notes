---
title: "Towards foundational LiDAR world models with efficient latent flow matching"
design: "LiDARWM"
arxiv: https://arxiv.org/abs/2506.23434
github: https://github.com/Orbis36/OccFM-NeurIPS2025
---

# LiDARWM: Towards foundational LiDAR world models with efficient latent flow matching

::: info 璁烘枃淇℃伅
- **Design**: LiDARWM
- **璁烘枃鍏ㄧ抽*: Towards foundational LiDAR world models with efficient latent flow matching
- **arXiv**: [https://arxiv.org/abs/2506.23434](https://arxiv.org/abs/2506.23434)
- **GitHub**: [https://github.com/Orbis36/OccFM-NeurIPS2025](https://github.com/Orbis36/OccFM-NeurIPS2025)
:::

## 瀛︿範绗旇

### 鏍稿績鎬濇兂

LiDARWM 鏄涓潰鍚戝熀纭€婵€鍏夐浄杈句笘鐣屾ā鍨嬬殑绯荤粺鐮旂┒锛屽彂琛ㄤ锛NeurIPS 2025銆傛縺鍏夐浄杈句笘鐣屾ā鍨嬬浉姣斿浘鍍忎笘鐣屾ā鍨嬫彁渚涙洿缁撴瀯鍖栧拰鍑犱綍鎰熺煡鐨勮〃绀猴紝浣嗙幇鏈夋柟娉曡缁冨煙鐙獎鈥斺€旀瘡涓ā鍨嬩粎鍦ㄥ叾鏋勫缓鐨勯鍩熷唴琛ㄧ幇鑹ソ銆傛湰鏂囩殑鏍稿績闂鏄細鑳藉惁寮€鍙戝嚭璺ㄥ鍩熻縼绉荤殑婵€鍏夐浄杈惧熀纭€涓栫晫妯″瀷锛熷洟闃熻繘琛屼簡棣栦釜绯荤粺鍩熻縼绉荤爺绌讹紝娑电洊涓変釜鎸戞垬鎬у満鏅殑1) 瀹ゅ鍒板鍐呯殑娉涘寲锛2) 绋€鐤忓厜鏉熶笌绋犲瘑鍏夋潫鐨勯€傞厤锛?3) 闈炶涔夊埌璇箟鐨勮縼绉汇€傚疄楠岃〃鏄庡崟涓璁粌妯″瀷鐩告瘮浠庡ご璁粌鍙疄鐜伴珮鏂11% 鐨勭粷瀵规彁鍗囷紙83% 鐩稿鎻愬崌锛夛紝鍦?36 缁勬瘮杈冧腑 30 缁勮儨鍑恒€傛澶栵紝鎻愬嚭鍩轰簬娼滃湪鏉′欢娴佸尮閰嶏紙CFM锛夌殑楂樻晥妗嗘灦锛屼粎浣跨敤涓€鍗婅缁冩暟鎹€?殑鍘嬬缉姣旓紝鍙栧緱璇箟鍗犵敤棰勬祴 SOTA锛屼絾23絾璁＄畻楂樻晥�?8锛FPS 鍔犻€燂級銆?
### 鎶€鏈灦鏋?
**Vision Encoding锛堣瑙夌紪鐮侊級*锛歀iDARWM 灏嗘縺鍏夐浄杈剧偣浜戜綔涓鸿緭鍏ワ紝閫氳繃浣撶礌鍖栵紙voxelization锛夊皢绋€鐤?3D 鐐逛簯杞崲涓鸿兘3D 浣撶礌缃戞牸銆傚叧閿殑鍘嬬缉娲炲療锛氱幇鏈夋柟娉曞婵€鍏夐浄杈炬暟鎹帇缂╀笉瓒筹紙lidar 鐨勭█鐤忔€ф剰鍛崇潃澶ч噺闆朵綋绱狅級锛屽鑷磋〃绀烘晥鐜囦綆涓嬨€侺iDARWM 浣跨敤楂樺帇缂╂瘮鐨勬綔鍦ㄨ嚜缂栫爜鍣ㄥ湪娼滃湪绌洪棿涓繘琛屾縺鍏夐浄杈捐〃绀哄涔犮。
**Knowledge Learning锛堢煡璇嗗涔狅級*锛歀iDARWM 閲囩敤娼滃湪鏉′欢娴佸尮閰嶏紙CFM锛夋浛浠ｆ爣鍑嗘墿鏁ｇ洰鏍囥€侰FM 璁粌鏇撮珮鏁堬紝鍥犱负娴佸尮閰嶅彧闇€瑕佸涔犱粠鍣０鍒版暟鎹殑涓€鏉＄洿绾胯矾寰勶紝鑰屼笉鍍忔墿鏁ｉ渶瑕佸涔犲畬鏁寸殑闅忔満寰垎鏂圭▼銆傚煙杩佺Щ瀹為獙鎻ず浜嗗叧閿彂鐜扳€斺€斿姩鎬佸涔犺兘鍔涳紙鍦烘櫙婕斿寲瑙勫緥锛夎€岄潪闈欐€侀噸寤烘槸鍙縼绉荤殑锛氶璁粌妯″瀷瀛﹀埌鐨?浜嬬墿濡備綍绉诲姩鍜屽彉�?鐨勮寰嬭法瓒婁笉鍚屾縺鍏夐浄杈鹃厤缃粛鐒堕€傜敤銆備粎闇旇5% 鏍囨敞鏁版嵁鍗冲彲瓒呰秺涔嬪墠闇€瑕佸叏閲忔爣娉ㄧ殑璇箟鍗犵敤棰勬祴鏂规硶。
**Controllable Simulation锛堝彲鎺т豢鐪燂級**锛歀iDARWM 鏀寔杞ㄨ抗鏉′欢璇箟鍗犵敤棰勬祴鈥斺€旂粰瀹氳嚜杞︽湭鏉ヨ建杩癸紝棰勬祴瀵瑰簲鐨勬湭鏉ヨ涔夊崰鐢ㄧ姸鎬併€傝繖涓鸿嚜鍔ㄩ┚椹剁殑鏁版嵁澧炲己鍜岄棴鐜豢鐪熸彁渚涗簡楂樻晥鏂规銆?傚鍘嬬缉姣斿拰 28鍚FPS 鍔犻€熶娇鍏跺叿澶囧疄闄呴儴缃茬殑鍙鎬с€?
### 浠ｇ爜瀹炵幇瑕佺偣

- **楂樺帇缂╂瘮娼滃湪鑷紪鐮佸櫒*锛氬皢绋€鐤忔縺鍏夐浄杈句綋绱犵紪鐮佷负鏋佷綆缁存綔鍦ㄨ〃绀猴紝6浣楂樺帇缂?- **娼滃湪CFM**锛氬湪娼滃湪绌洪棿涓簲鐢ㄦ潯浠舵祦鍖归厤锛屽涔犱粠鍣０鍒版暟鎹垎甯冪殑鏈€浼樹紶杈撹矾寰?- **涓夊煙杩佺Щ璁剧疆**锛氬鍐?瀹ゅ銆佺█偣绋犲�?LiDAR銆侀潪璇箟/璇嗗- **NeurIPS 2025 accepted**

### 鍏抽敭鍒涙柊。
- **棣栦釜婵€鍏夐浄杈惧熀纭€涓栫晫妯″瀷鐮旂┒**锛氱郴缁熸€у煙杩佺Щ鍒嗘灦- **娼滃涓CFM 妗嗘灦*锛氶珮鏁堣缁冩浛浠ｆ墿鏁ｏ紝鍔犻€熸敹�?- **6粠鍘嬬殑+ SOTA 绮惧儚*锛氳〃绀烘晥鐜囦笌鐢熸垚璐ㄩ噺鐨勫弻灦- **鏋佷綆鏍囨敞渚濊绗*旇% 鏍囨敞瓒呰秺鍏ㄩ噺鏍囨敞妯″。

## 鐩稿叧绗旇

- 📂 [Other Architectures 鍒嗙被缁艰堪](../other-architectures/)
- 🎨 [Latent Diffusion 鏂规硶](/world-models/architectures/diffusion-based-generation/latent-diffusion/)
- 📐 [Latent State-Space Modeling 鏂规硶](/world-models/architectures/state-transition/latent-state-space-modeling/)
- ⚛️ [Physics & Causality 鍩哄噯](/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/)
- 🚗 [Autonomous Driving 数据集/world-models/applications/autonomous-driving/)
