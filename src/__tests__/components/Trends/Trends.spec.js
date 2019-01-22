import { mount, RouterLinkStub  } from '@vue/test-utils'
import Trends from '@/components/Trends/Trends.vue';

describe('Trends Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(Trends, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
