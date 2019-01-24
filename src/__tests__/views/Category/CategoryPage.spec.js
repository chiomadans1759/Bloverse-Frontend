import { mount } from '@vue/test-utils';
import Category from '@/views/consumers/CategoryPage/CategoryPage.vue';

describe('Category Page', () => {
  it('should render correctly', () => {

    const wrapper = mount(Category, {})
    expect(wrapper.element).toMatchSnapshot();
  });
});
