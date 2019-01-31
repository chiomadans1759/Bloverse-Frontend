import { mount, RouterLinkStub  } from '@vue/test-utils';
import Settings from '@/views/general/Settings/SettingsPage.vue';

describe('Settings Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(Settings, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      propsData: {
        isCreator: false
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/edit/profile')
    expect(wrapper.element).toMatchSnapshot();
  });
});
