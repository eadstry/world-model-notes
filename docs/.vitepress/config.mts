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
      { text: '世界模型', link: '/world-models/' },
      {
        text: '视频生成',
        items: [
          { text: 'Methods', link: '/video-generation/methods/' },
          { text: 'Datasets', link: '/video-generation/datasets/' },
          { text: 'Benchmarks', link: '/video-generation/benchmarks/' },
        ]
      },
    ],

    sidebar: {
      '/world-models/': [
        {
          text: '世界模型',
          link: '/world-models/',
          collapsed: false,
          items: [
            {
              text: '理论基础',
              link: '/world-models/fundamentals/',
              collapsed: true,
            },
            {
              text: '架构设计',
              link: '/world-models/architectures/',
              collapsed: true,
              items: [
                {
                  text: 'Sequential Generation',
                  link: '/world-models/architectures/sequential-generation/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Visual Autoregressive Modeling',
                      link: '/world-models/architectures/sequential-generation/visual-autoregressive-modeling/'
                    },
                    {
                      text: 'MLLM-guided Multimodal AR',
                      link: '/world-models/architectures/sequential-generation/mllm-guided-multimodal-autoregressive-model/'
                    }
                  ]
                },
                {
                  text: 'Diffusion-based Generation',
                  link: '/world-models/architectures/diffusion-based-generation/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Latent Diffusion',
                      link: '/world-models/architectures/diffusion-based-generation/latent-diffusion/'
                    },
                    {
                      text: 'Autoregressive Diffusion',
                      link: '/world-models/architectures/diffusion-based-generation/autoregressive-diffusion/'
                    }
                  ]
                },
                {
                  text: 'Embedding Prediction',
                  link: '/world-models/architectures/embedding-prediction/',
                  collapsed: true,
                  items: [
                    {
                      text: 'JEPA Family',
                      link: '/world-models/architectures/embedding-prediction/jepa/'
                    }
                  ]
                },
                {
                  text: 'State Transition',
                  link: '/world-models/architectures/state-transition/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Latent State-Space Modeling',
                      link: '/world-models/architectures/state-transition/latent-state-space-modeling/'
                    },
                    {
                      text: 'Object-Centric Modeling',
                      link: '/world-models/architectures/state-transition/object-centric-modeling/'
                    }
                  ]
                },
                {
                  text: 'Other Architectures',
                  link: '/world-models/architectures/other-architectures/',
                  collapsed: true,
                }
              ]
            },
            {
              text: '数据集与评测',
              link: '/world-models/datasets-benchmarks/',
              collapsed: true,
              items: [
                {
                  text: 'Foundational World Modeling',
                  link: '/world-models/datasets-benchmarks/foundational-world-modeling/',
                  collapsed: true,
                  items: [
                    {
                      text: 'General World Prediction & Simulation',
                      link: '/world-models/datasets-benchmarks/foundational-world-modeling/general-world-prediction-and-simulation/'
                    },
                    {
                      text: 'Physics & Causality Benchmark',
                      link: '/world-models/datasets-benchmarks/foundational-world-modeling/physics-and-causality-benchmark/'
                    }
                  ]
                },
                {
                  text: 'Domain-specific World Modeling',
                  link: '/world-models/datasets-benchmarks/domain-specific-world-modeling/',
                  collapsed: true,
                  items: [
                    {
                      text: 'Embodied AI & Robotics',
                      link: '/world-models/datasets-benchmarks/domain-specific-world-modeling/embodied-ai-and-robotics/'
                    },
                    {
                      text: 'Autonomous Driving',
                      link: '/world-models/datasets-benchmarks/domain-specific-world-modeling/autonomous-driving/'
                    },
                    {
                      text: 'Interactive Environments & Gaming',
                      link: '/world-models/datasets-benchmarks/domain-specific-world-modeling/interactive-environments-and-gaming/'
                    }
                  ]
                }
              ]
            },
            {
              text: '下游应用',
              link: '/world-models/applications/',
              collapsed: true,
            },
            {
              text: '研究生态',
              link: '/world-models/ecology/',
              collapsed: true,
              items: [
                {
                  text: 'Surveys',
                  link: '/world-models/ecology/surveys/'
                },
                {
                  text: 'Workshops',
                  link: '/world-models/ecology/workshops/'
                },
                {
                  text: 'Repositories',
                  link: '/world-models/ecology/repositories/'
                },
                {
                  text: 'Perspectives',
                  link: '/world-models/ecology/perspectives/'
                }
              ]
            }
          ]
        }
      ],
      '/video-generation/': [
        {
          text: '视频生成后训练',
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
            },
            {
              text: 'Benchmarks',
              link: '/video-generation/benchmarks/',
              collapsed: true,
            }
          ]
        }
      ]
    },

    outline: 'deep',
  },

  appearance: true,
})
