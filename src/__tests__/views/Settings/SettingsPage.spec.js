import { mount } from '@vue/test-utils';
import Settings from '@/views/consumers/Settings/SettingsPage.vue';

describe('Settings Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(Settings, {})
    expect(wrapper.element).toMatchSnapshot();
  });
});
