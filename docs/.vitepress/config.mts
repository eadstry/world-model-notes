import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '世界模型学习笔记库',
  description: '基于 Awesome-Vision-World-Model 综述的视觉世界模型学习笔记',
  base: '/world-model-notes/',
  lang: 'zh-CN',

  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: '首页', link: '/' },
      { text: 'Designs', link: '/designs/' },
      { text: 'Datasets & Benchmarks', link: '/datasets/' },
      { text: 'Others', link: '/others/' },
    ],

    sidebar: {
      '/designs/': [
        {
          text: 'Designs',
          collapsed: false,
          items: [
            {
              text: 'Sequential Generation',
              collapsed: true,
              items: [
                {
                  text: 'Visual Autoregressive Modeling',
                  link: '/designs/sequential-generation/visual-autoregressive-modeling/'
                },
                {
                  text: 'MLLM-guided Multimodal Autoregressive Model',
                  link: '/designs/sequential-generation/mllm-guided-multimodal-autoregressive-model/'
                }
              ]
            },
            {
              text: 'Diffusion-based Generation',
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
              collapsed: true,
              items: [
                {
                  text: 'JEPA',
                  link: '/designs/embedding-prediction/jepa/'
                }
              ]
            },
            {
              text: 'State Transition',
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
              collapsed: true,
              items: [
                {
                  text: 'Other Architectures',
                  link: '/designs/other-architectures/other-architectures/'
                }
              ]
            }
          ]
        }
      ],
      '/datasets/': [
        {
          text: 'Datasets \\& Benchmarks',
          collapsed: false,
          items: [
            {
              text: 'Foundational World Modeling',
              collapsed: true,
              items: [
                {
                  text: 'General World Prediction and Simulation',
                  link: '/datasets/foundational-world-modeling/general-world-prediction-and-simulation/'
                },
                {
                  text: 'Physics and Causality Benchmark',
                  link: '/datasets/foundational-world-modeling/physics-and-causality-benchmark/'
                }
              ]
            },
            {
              text: 'Domain-specific World Modeling',
              collapsed: true,
              items: [
                {
                  text: 'Embodied AI and Robotics',
                  link: '/datasets/domain-specific-world-modeling/embodied-ai-and-robotics/'
                },
                {
                  text: 'Autonomous Driving',
                  link: '/datasets/domain-specific-world-modeling/autonomous-driving/'
                },
                {
                  text: 'Interactive Environments and Gaming',
                  link: '/datasets/domain-specific-world-modeling/interactive-environments-and-gaming/'
                }
              ]
            }
          ]
        }
      ],
      '/others/': [
        {
          text: 'Others',
          collapsed: false,
          items: [
            {
              text: 'Survey',
              collapsed: true,
              items: [
                {
                  text: 'Survey',
                  link: '/others/survey/survey/'
                }
              ]
            },
            {
              text: 'GitHub Repo',
              collapsed: true,
              items: [
                {
                  text: 'GitHub Repo',
                  link: '/others/github-repo/github-repo/'
                }
              ]
            },
            {
              text: 'Workshop',
              collapsed: true,
              items: [
                {
                  text: 'Workshop',
                  link: '/others/workshop/workshop/'
                }
              ]
            },
            {
              text: 'Theory',
              collapsed: true,
              items: [
                {
                  text: 'Theory',
                  link: '/others/theory/theory/'
                }
              ]
            },
            {
              text: 'World Models for Downstream Tasks',
              collapsed: true,
              items: [
                {
                  text: 'World Models for Downstream Tasks',
                  link: '/others/world-models-for-downstream-tasks/world-models-for-downstream-tasks/'
                }
              ]
            },
            {
              text: 'Other Perspectives of World Modeling',
              collapsed: true,
              items: [
                {
                  text: 'Other Perspectives of World Modeling',
                  link: '/others/other-perspectives-of-world-modeling/other-perspectives-of-world-modeling/'
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
