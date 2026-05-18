<script setup lang="ts">
import { inBrowser } from 'vitepress'
import { onMounted, ref, watch } from 'vue'

const LEFT_KEY = 'wm-notes-left-collapsed'
const RIGHT_KEY = 'wm-notes-right-collapsed'

const leftCollapsed = ref(false)
const rightCollapsed = ref(false)

const readStoredFlag = (key: string) => {
  if (!inBrowser) return false
  return window.localStorage.getItem(key) === 'true'
}

const applyDataset = () => {
  if (!inBrowser) return
  const root = document.documentElement
  root.dataset.leftCollapsed = String(leftCollapsed.value)
  root.dataset.rightCollapsed = String(rightCollapsed.value)
}

const persistState = () => {
  if (!inBrowser) return
  window.localStorage.setItem(LEFT_KEY, String(leftCollapsed.value))
  window.localStorage.setItem(RIGHT_KEY, String(rightCollapsed.value))
}

const toggleLeft = () => {
  leftCollapsed.value = !leftCollapsed.value
}

const toggleRight = () => {
  rightCollapsed.value = !rightCollapsed.value
}

onMounted(() => {
  leftCollapsed.value = readStoredFlag(LEFT_KEY)
  rightCollapsed.value = readStoredFlag(RIGHT_KEY)
  applyDataset()
})

watch([leftCollapsed, rightCollapsed], () => {
  applyDataset()
  persistState()
})
</script>

<template>
  <div class="doc-toggles" aria-label="文档目录显示控制">
    <button
      class="doc-toggle-btn"
      type="button"
      :aria-pressed="leftCollapsed"
      @click="toggleLeft"
    >
      {{ leftCollapsed ? '展开左目录' : '折叠左目录' }}
    </button>
    <button
      class="doc-toggle-btn"
      type="button"
      :aria-pressed="rightCollapsed"
      @click="toggleRight"
    >
      {{ rightCollapsed ? '展开右目录' : '折叠右目录' }}
    </button>
  </div>
</template>
