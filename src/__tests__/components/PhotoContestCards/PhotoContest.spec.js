import { mount, RouterLinkStub  } from '@vue/test-utils'
import PhotoContest from '@/components/PhotoContestCards/PhotoContest.vue';

describe('PhotoContest Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PhotoContest, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
