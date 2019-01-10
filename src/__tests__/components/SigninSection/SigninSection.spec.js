import { shallowMount } from '@vue/test-utils'
import SigninComponent from '@/components/SigninSection/Signin.vue';

describe('SigninComponent Component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(SigninComponent);
    expect(wrapper.element).toMatchSnapshot();
  })
});
