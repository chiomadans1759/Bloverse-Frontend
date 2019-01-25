import { mount } from '@vue/test-utils'
import CreatorCard from '@/components/CreatorCard/CreatorCard.vue';

describe('CreatorCard Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorCard , {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
