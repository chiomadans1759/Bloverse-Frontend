import { mount, RouterLinkStub  } from '@vue/test-utils';
import Settings from '@/views/consumers/Settings/SettingsPage.vue';

describe('Settings Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(Settings, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/edit/profile')
    expect(wrapper.element).toMatchSnapshot();
  });
});
