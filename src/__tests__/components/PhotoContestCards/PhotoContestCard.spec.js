import { mount, RouterLinkStub  } from '@vue/test-utils'
import PhotoContestCard from '@/components/PhotoContestCards/PhotoContestCard.vue';

describe('PhotoContestCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PhotoContestCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
