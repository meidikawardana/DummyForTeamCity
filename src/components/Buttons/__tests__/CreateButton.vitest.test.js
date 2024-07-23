import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import { mount } from '@vue/test-utils'
import CreateButton from 'components/Buttons/CreateButton.vue'
import ToolbarButton from 'components/Buttons/ToolbarButton.vue'
import { beforeAll, describe, expect, it } from 'vitest'

installQuasarPlugin()
let wrapper = null
describe('Create Button', async () => {
  beforeAll(() => {
    wrapper = mount(CreateButton, {
      props: {
        label: 'Create'
      },
      components: {
        'my-toolbar-button': ToolbarButton
      }
    })
  })
  it('should mount component', () => {
    expect(wrapper.html().includes('Create')).toBeTruthy()
  })
})
