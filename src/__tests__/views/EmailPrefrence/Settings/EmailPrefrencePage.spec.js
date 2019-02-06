import { mount, RouterLinkStub } from '@vue/test-utils';
import EmailPrefrence from '@/views/journalists/EmailPrefrence/EmailPrefrencePage.vue';

describe('Creator Email Settings Page', () => {
  it('should render properly', () => {
    const wrapper = mount(EmailPrefrence, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
