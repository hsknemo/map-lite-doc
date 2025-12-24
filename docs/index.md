---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MapLite"
  text: "Mapbox and Openlayers"
  image:
    src: /img/tj.svg
  tagline: 大道至简，少则精
  actions:
    - theme: brand
      text: 快速开始
      link: /quike-start
    - theme: alt
      text: 快速使用
      link: /fast-use

features:
  - title: MapBox
    details: 一个地图
  - title: Openlayers
    details: 另外一个地图
---

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/42964542?v=4',
    name: 'HskNemo',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/hsknemo' },
    ]
  },
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members />
