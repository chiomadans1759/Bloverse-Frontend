import { mount, RouterLinkStub  } from '@vue/test-utils'
import CategoryCard from '@/components/CategoryCard/CategoryCard.vue';

describe('CategoryCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CategoryCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
