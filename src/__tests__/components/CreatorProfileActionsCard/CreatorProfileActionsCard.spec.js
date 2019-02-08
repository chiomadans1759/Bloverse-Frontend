import { mount, RouterLinkStub  } from '@vue/test-utils'
import CreatorProfileActionsCard from '@/components/CreatorProfileActionsCard/CreatorProfileActionsCard.vue';

describe('CreatorActionCard Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(CreatorProfileActionsCard, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
