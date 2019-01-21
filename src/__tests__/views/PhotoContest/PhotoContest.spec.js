import { mount, RouterLinkStub  } from '@vue/test-utils'
import PhotoContest from '@/views/general/PhotoContest/PhotoContestPage.vue';

describe('PhotoContest Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(PhotoContest, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/')
    expect(wrapper.element).toMatchSnapshot();
  });
});
