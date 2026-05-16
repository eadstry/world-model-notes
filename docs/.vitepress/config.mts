import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

export default defineConfig({
  title: '世界模型 & 视频生成 学习笔记库',
  description: '世界模型与视频生成后训练的系统性学习笔记',
  base: '/world-model-notes/',
  lang: 'zh-CN',

  markdown: {
    config: (md) => {
      md.use(mathjax3)
    }
  },

  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Designs', link: '/designs/' },
      { text: 'Datasets & Benchmarks', link: '/datasets/' },
      { text: 'Others', link: '/others/' },
      {
        text: 'Video Generation',
        items: [
          { text: 'Methods', link: '/video-generation/methods/' },
          { text: 'Datasets', link: '/video-generation/datasets/' },
          { text: 'Benchmarks', link: '/video-generation/benchmarks/' },
        ]
      },
    ],

    sidebar: {
      '/designs/': [
        {
          text: 'World Models — Designs',
          link: '/designs/',
          collapsed: false,
          items: [
            {
              text: 'Sequential Generation',
              link: '/designs/sequential-generation/',
              collapsed: true,
              items: [
                {
                  text: 'Visual Autoregressive Modeling',
                  link: '/designs/sequential-generation/visual-autoregressive-modeling/'
                },
                {
                  text: 'MLLM-guided Multimodal AR',
                  link: '/designs/sequential-generation/mllm-guided-multimodal-autoregressive-model/'
                }
              ]
            },
            {
              text: 'Diffusion-based Generation',
              link: '/designs/diffusion-based-generation/',
              collapsed: true,
              items: [
                {
                  text: 'Latent Diffusion',
                  link: '/designs/diffusion-based-generation/latent-diffusion/'
                },
                {
                  text: 'Autoregressive Diffusion',
                  link: '/designs/diffusion-based-generation/autoregressive-diffusion/'
                }
              ]
            },
            {
              text: 'Embedding Prediction',
              link: '/designs/embedding-prediction/',
              collapsed: true,
              items: [
                {
                  text: 'JEPA Family',
                  link: '/designs/embedding-prediction/jepa/'
                }
              ]
            },
            {
              text: 'State Transition',
              link: '/designs/state-transition/',
              collapsed: true,
              items: [
                {
                  text: 'Latent State-Space Modeling',
                  link: '/designs/state-transition/latent-state-space-modeling/'
                },
                {
                  text: 'Object-Centric Modeling',
                  link: '/designs/state-transition/object-centric-modeling/'
                }
              ]
            },
            {
              text: 'Other Architectures',
              link: '/designs/other-architectures/',
              collapsed: true,
              items: [
                {
                  text: 'Paper List',
                  link: '/designs/other-architectures/other-architectures/'
                }
              ]
            }
          ]
        }
      ],
      '/datasets/': [
        {
          text: 'World Models — Datasets & Benchmarks',
          link: '/datasets/',
          collapsed: false,
          items: [
            {
              text: 'Foundational World Modeling',
              link: '/datasets/foundational-world-modeling/',
              collapsed: true,
              items: [
                {
                  text: 'General World Prediction & Simulation',
                  link: '/datasets/foundational-world-modeling/general-world-prediction-and-simulation/'
                },
                {
                  text: 'Physics & Causality Benchmark',
                  link: '/datasets/foundational-world-modeling/physics-and-causality-benchmark/'
                }
              ]
            },
            {
              text: 'Domain-specific World Modeling',
              link: '/datasets/domain-specific-world-modeling/',
              collapsed: true,
              items: [
                {
                  text: 'Embodied AI & Robotics',
                  link: '/datasets/domain-specific-world-modeling/embodied-ai-and-robotics/'
                },
                {
                  text: 'Autonomous Driving',
                  link: '/datasets/domain-specific-world-modeling/autonomous-driving/'
                },
                {
                  text: 'Interactive Environments & Gaming',
                  link: '/datasets/domain-specific-world-modeling/interactive-environments-and-gaming/'
                }
              ]
            }
          ]
        }
      ],
      '/others/': [
        {
          text: 'World Models — Others',
          link: '/others/',
          collapsed: false,
          items: [
            {
              text: 'Survey',
              link: '/others/survey/',
              collapsed: true,
              items: [
                {
                  text: '论文列表',
                  link: '/others/survey/survey/'
                }
              ]
            },
            {
              text: 'GitHub Repo',
              link: '/others/github-repo/',
              collapsed: true,
              items: [
                {
                  text: '仓库列表',
                  link: '/others/github-repo/github-repo/'
                }
              ]
            },
            {
              text: 'Workshop',
              link: '/others/workshop/',
              collapsed: true,
              items: [
                {
                  text: 'Workshop 列表',
                  link: '/others/workshop/workshop/'
                }
              ]
            },
            {
              text: 'Theory',
              link: '/others/theory/',
              collapsed: true,
              items: [
                {
                  text: '论文列表',
                  link: '/others/theory/theory/'
                }
              ]
            },
            {
              text: 'Downstream Tasks',
              link: '/others/world-models-for-downstream-tasks/',
              collapsed: true,
              items: [
                {
                  text: '论文列表',
                  link: '/others/world-models-for-downstream-tasks/world-models-for-downstream-tasks/'
                }
              ]
            },
            {
              text: 'Other Perspectives',
              link: '/others/other-perspectives-of-world-modeling/',
              collapsed: true,
              items: [
                {
                  text: '论文列表',
                  link: '/others/other-perspectives-of-world-modeling/other-perspectives-of-world-modeling/'
                }
              ]
            }
          ]
        }
      ],
      '/video-generation/': [
        {
          text: 'Video Generation',
          link: '/video-generation/',
          collapsed: false,
          items: [
            {
              text: 'Methods',
              link: '/video-generation/methods/',
              collapsed: true,
              items: [
                {
                  text: 'Conference Papers',
                  link: '/video-generation/methods/conference-papers/'
                },
                {
                  text: 'arXiv Papers',
                  link: '/video-generation/methods/arxiv-papers/'
                }
              ]
            },
            {
              text: 'Datasets',
              link: '/video-generation/datasets/',
              collapsed: true,
              items: [
                {
                  text: '数据集列表',
                  link: '/video-generation/datasets/'
                }
              ]
            },
            {
              text: 'Benchmarks',
              link: '/video-generation/benchmarks/',
              collapsed: true,
              items: [
                {
                  text: '评测基准列表',
                  link: '/video-generation/benchmarks/'
                }
              ]
            }
          ]
        }
      ]
    },

    outline: 'deep',
  },

  appearance: true,
})
