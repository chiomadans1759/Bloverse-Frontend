import { mount, RouterLinkStub  } from '@vue/test-utils'
import Homepage from '@/views/general/Home/Homepage.vue';

describe('Homepage Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(Homepage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
