import { mount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';

describe('Footer Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(Footer);

    expect(wrapper.element).toMatchSnapshot();
  });
});
