import { mount, RouterLinkStub  } from '@vue/test-utils'
import DraftItemCard from '@/components/DraftItemCard/DraftItemCard.vue';

describe('DraftItemCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(DraftItemCard , {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
