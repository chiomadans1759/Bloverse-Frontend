import { mount } from '@vue/test-utils'
import CreatorNavigation from '@/components/CreatorNavigation/CreatorNavigation.vue';

describe('CreatorNavigation Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorNavigation , {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
