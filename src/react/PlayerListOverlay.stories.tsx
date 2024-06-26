import type { Meta, StoryObj } from '@storybook/react'

import PlayerListOverlay from './PlayerListOverlay'

const meta: Meta<typeof PlayerListOverlay> = {
  component: PlayerListOverlay
}

export default meta
type Story = StoryObj<typeof PlayerListOverlay>;

export const Primary: Story = {
  args: {
    playersLists: [],
    clientId: '',
    tablistHeader: 'Header',
    tablistFooter: 'Footer',
    serverIP: '95.163.228.101',
  }
}
