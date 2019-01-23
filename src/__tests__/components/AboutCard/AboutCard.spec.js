import { mount } from '@vue/test-utils'
import AboutCard from '@/components/AboutCard/AboutCard.vue';

describe('AboutCard Compoenent', () => {
  it('should render correctly', () => {

    const wrapper = mount(AboutCard, {});
    expect(wrapper.element).toMatchSnapshot();
  });
});
