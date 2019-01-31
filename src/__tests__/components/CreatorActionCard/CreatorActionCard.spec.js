import { mount } from '@vue/test-utils'
import CreatorActionsCard from '@/components/CreatorActionsCard/CreatorActionsCard.vue';

describe('CreatorActionCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorActionsCard , {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
