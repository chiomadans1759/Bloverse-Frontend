import { mount, RouterLinkStub } from '@vue/test-utils';
import Settings from '@/views/consumer/Settings/Settings.vue';

describe('Settings', () => {
  it('should render correctly', () => {
    const wrapper = mount(Settings, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  })
})
