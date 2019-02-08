import { mount } from '@vue/test-utils'
import CreatorPublishIcon from '@/components/CreatorPublishIcon/CreatorPublishIcon.vue';

describe('CreatorPublishIcon Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorPublishIcon , {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
