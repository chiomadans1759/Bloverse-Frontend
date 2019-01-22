import { mount, RouterLinkStub  } from '@vue/test-utils'
import Trend from '@/components/Trends/Trend.vue';

describe('Trend Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(Trend, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
