import { mount, RouterLinkStub  } from '@vue/test-utils'
import ConsumerHomePage from '@/views/consumers/ConsumerHome/ConsumerHomePage.vue';

describe('Homepage Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(ConsumerHomePage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
