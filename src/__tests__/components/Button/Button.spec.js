import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button/Button.vue';

describe('Button Component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should call the emit function when button is clicked', () => {
    const $emit = jest.fn();
    const wrapper = shallowMount(Button, {
      mocks: { $emit }
    });
    wrapper.find('button').trigger('click');
    expect($emit).toHaveBeenCalled();
  });
});
