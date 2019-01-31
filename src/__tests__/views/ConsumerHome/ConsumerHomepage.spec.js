import { mount, RouterLinkStub  } from '@vue/test-utils'
import ConsumerHomepage from '@/views/consumers/ConsumerHome/ConsumerHomePage.vue';

describe('Homepage Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(ConsumerHomepage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
