import { mount } from '@vue/test-utils'
import TextInput from '@/components/TextInput/TextInput.vue';

describe('TextInput Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(TextInput);
    expect(wrapper.element).toMatchSnapshot();
  })
});
