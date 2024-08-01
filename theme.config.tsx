import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Hopscotch On Deskrop</span>,
  project: {
    link: 'https://github.com/HopscotchOnDesktop/HopscotchOnDesktop',
  },
  feedback: {
    content: null
  },
  editlink: {
    component: null
  },
  footer: {
    text: (
      <span>
        <a href="https://HopscotchOnDesktop.github.io" target="_blank">
          HopscotchOnDesktop
        </a>
      </span>
    )
  },
}

export default config