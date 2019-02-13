import { mount } from '@vue/test-utils';
import ErrorAlert1 from '@/components/ErrorAlert1/ErrorAlert1.vue';

describe('ErrorAlert1 Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(ErrorAlert1);

    expect(wrapper.element).toMatchSnapshot();
  });
  it('should render title', () => {
    const wrapper = mount(ErrorAlert1, {
      propsData: {
        heading: 'alert-heading'
      }
    })
    expect(wrapper.props().heading).toBe('alert-heading');
  })
});
