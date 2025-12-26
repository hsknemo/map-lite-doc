---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

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

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
     <div class="team_tit">
        Hello MapLite <img src="/img/tj.svg" alt="">
     </div>
    </template>
    <template #lead>
    ``有时候真的不想写文档..``
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members size="small" />
</VPTeamPage>
