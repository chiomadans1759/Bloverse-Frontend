import { mount, RouterLinkStub } from '@vue/test-utils';
import TrashPage from '@/views/journalists/Trash/TrashPage.vue';

describe('TrashPage Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(TrashPage, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
