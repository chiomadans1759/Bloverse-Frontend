import { mount } from '@vue/test-utils';
import SuccessAlert from '@/components/SuccessAlert/SuccessAlert.vue';

describe('SuccessAlert Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(SuccessAlert);

    expect(wrapper.element).toMatchSnapshot();
  });
  it('should render title', () => {
    const wrapper = mount(SuccessAlert, {
      propsData: {
        heading: 'alert-heading'
      }
    })
    expect(wrapper.props().heading).toBe('alert-heading');
  })
});
