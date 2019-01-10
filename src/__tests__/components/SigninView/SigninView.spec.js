import { shallowMount } from '@vue/test-utils'
import SigninView from '@/views/Signin/Signin.vue';

describe('SigninView Component', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(SigninView);
    expect(wrapper.element).toMatchSnapshot();
  })
});
