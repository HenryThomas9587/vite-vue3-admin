import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export interface MenuItem {
  id: string
  title: string
  icon?: Component
  path?: string
  children?: MenuItem[]
  permissions?: string[]
  component?: (() => Promise<typeof import('*.vue')>) | Component
  hidden?: boolean
}

export interface MenuState {
  collapsed: boolean
  items: MenuItem[]
}