import { mount } from '@vue/test-utils'
import CreatorAddIcon from '@/components/CreatorAddIcon/CreatorAddIcon.vue';

describe('CreatorAddIcon Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CreatorAddIcon , {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
