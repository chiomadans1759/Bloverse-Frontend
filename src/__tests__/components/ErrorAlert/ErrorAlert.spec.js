import { mount } from '@vue/test-utils';
import ErrorAlert from '@/components/ErrorAlert/ErrorAlert.vue';

describe('ErrorAlert Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(ErrorAlert);

    expect(wrapper.element).toMatchSnapshot();
  });
  it('should render title', () => {
    const wrapper = mount(ErrorAlert, {
      propsData: {
        heading: 'alert-heading'
      }
    })
    expect(wrapper.props().heading).toBe('alert-heading');
  })
});
