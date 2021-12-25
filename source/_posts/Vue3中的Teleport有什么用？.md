---
title: Vue3中的Teleport有什么用？
date: 2021-12-25
author: Justin
top: false
cover: false
categories: Vue
tags:
  - Vue
---

## 一、Teleport有什么用？
>Vue3中的组件模板属于该组件，有时候我们想把模板的内容移动到当前组件之外的DOM中，这个时候就可以使用Teleport。

## 二、如何使用？
>只需将组件包裹在teleport组件中，并指示移动到哪个DOM元素中即可。

```js
<template>
<teleport to="body">
    <div class="modal-bg" v-if="visible">
        <div class="modal-content">
            <button class="close" @click="$emit('close-modal')"> X </button>
            <div class="model-title">{{title}}</div>
            <div class="model-body">
                <slot>
                    模态对话框
                </slot>
            </div>
        </div>
    </div>
</teleport>
</template>
```