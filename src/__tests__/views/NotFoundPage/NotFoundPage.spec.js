import { mount, RouterLinkStub  } from '@vue/test-utils'
import NotFoundPage from "@/views/general/NotFoundPage/NotFoundPage.vue";

describe('Not Found Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(NotFoundPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
