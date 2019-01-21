import { mount, RouterLinkStub  } from '@vue/test-utils'
import RecommendationCard from '@/components/Recommendations/RecommendationCard.vue';

describe('RecommendationCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(RecommendationCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
