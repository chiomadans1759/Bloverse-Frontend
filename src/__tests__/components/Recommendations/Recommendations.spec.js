import { mount, RouterLinkStub  } from '@vue/test-utils'
import Recommendations from '@/components/Recommendations/Recommendations.vue';

describe('Recommendations Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(Recommendations, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
