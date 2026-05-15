---
title: "Dreamdrive: Generative 4d scene modeling from street view images"
design: "Dreamdrive"
arxiv: https://arxiv.org/abs/2501.00601
github: https://github.com/NVlabs/DreamDrive
---

# Dreamdrive: Generative 4d scene modeling from street view images

::: info 论文信息
- **Design**: Dreamdrive
- **论文全称**: Dreamdrive: Generative 4d scene modeling from street view images
- **arXiv**: [https://arxiv.org/abs/2501.00601](https://arxiv.org/abs/2501.00601)
- **GitHub**: [https://github.com/NVlabs/DreamDrive](https://github.com/NVlabs/DreamDrive)
:::

## 核心思想

DreamDrive 是 NVIDIA 提出的生成式 4D 场景建模方法，核心创新在于将视频扩散模型的生成能力与 3D 高斯溅射（3D Gaussian Splatting）的重建精度相结合。传统重建方法能从驾驶日志创建 3D 场景并合成几何一致的驾驶视频，但依赖昂贵的物体标注，难以泛化到真实场景数据（in-the-wild）。另一方面，纯生成模型能以更泛化的方式合成动作条件驾驶视频，但往往难以维持 3D 视觉一致性。DreamDrive 巧妙地将两者融合：先用视频扩散模型生成一系列视觉参考帧和特征图，再用新颖的混合高斯表示将这些 2D 参考提升为 4D 时空场景。

DreamDrive 的精妙之处在于"先验替代标注"的策略。传统重建方法需要精确的 3D 物体标注来初始化几何，而 DreamDrive 使用视频扩散模型生成的视觉参考作为先验，配合 DUSt3R 等几何初始化工具，在无需人工标注的情况下实现高质量 4D 重建。这意味着 DreamDrive 可以处理任何街头视角图像，而不仅限于标注完备的自动驾驶数据集。

## 技术架构

**Vision Encoding（视觉编码）**：DreamDrive 的视频扩散先验模块基于 Stable Video Diffusion（SVD）架构，从输入的单张街景图像生成多帧参考视频和对应的 DINOv2 特征图。生成的视觉参考为后续的几何重建提供了丰富的多视图信息。推荐使用 Vista 或 MagicDrive 作为视频扩散先验。

**Knowledge Learning（知识学习）**：DreamDrive 的知识学习体现在混合高斯表示（hybrid Gaussian representation）的设计中。该表示将 4D 场景分解为静态和动态高斯组件，通过自监督方式学习场景中的动静分离。模型利用 DUSt3R 进行几何初始化，SAM-2 进行语义掩码生成以辅助聚类，simple-knn 进行高斯初始化。整个重建过程不需要显式的物体标注。

**Controllable Simulation（可控模拟）**：给定一条驾驶轨迹，DreamDrive 通过高斯溅射渲染出 3D 一致的驾驶视频。由于场景已转化为显式 4D 高斯表示，用户可以自由指定新视角（novel views）进行渲染，实现了真正的空间自由探索。在 nuScenes 和街头视角图像上的实验证明，DreamDrive 能生成可控、泛化且 3D 一致的驾驶场景视频。

## 代码实现要点

DreamDrive 基于多个子模块构建（Apache-2.0 许可），安装依赖较复杂：

```bash
conda create -n dreamdrive python=3.9
cd PATH_TO_REPO
pip install -r requirements.txt
python setup.py develop
```

**核心第三方依赖**（均需从 submodules 编译安装）：
- `diff-gaussian-rasterization/`：支持特征/深度渲染的高斯溅射
- `dust3r/`：几何初始化（需下载 DUSt3R_ViTLarge_BaseDecoder_512_dpt.pth）
- `segment-anything-2/`：语义掩码生成（可选 KMeans 替代）
- `simple-knn/`：3D 高斯初始化
- `vista/`：视频生成先验（需下载 svd_xt.safetensors）

推理流程：
```bash
python dreamdrive/diffusion/sample.py   # 生成视觉参考帧
bash scripts/run_ours_v2.sh             # 4D 重建和渲染
```

## 关键创新点

1. **生成+重建融合范式**：首次将视频扩散模型的生成先验与 4D 高斯溅射重建统一，取两者之长
2. **混合高斯表示**：自监督的动静分离能力，无需显式物体标注
3. **无需标注的泛化**：可处理任何街景图像（in-the-wild），不限于标注数据集
4. **真正的 4D 场景建模**：不仅生成视频，还构建可自由探索的 4D 时空场景
5. **下游任务增强**：生成的 4D 场景可改善感知（3D 检测）和规划任务

## 代表性结果

DreamDrive 在 nuScenes 和 in-the-wild 街景图像上展示了从单张图像生成完整 4D 场景的能力。模型可以从静态拍摄图像重建出包含运动车辆、行人的动态 4D 场景，并支持从任意视角渲染视频。动静分离能力使场景编辑更加灵活（如删除/替换动态物体）。生成的视频保持了高视觉保真度和 3D 一致性，提升了感知和规划任务的性能。论文被 ICRA 2025 接收。
