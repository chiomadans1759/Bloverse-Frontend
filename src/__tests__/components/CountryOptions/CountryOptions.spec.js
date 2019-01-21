import { mount, RouterLinkStub  } from '@vue/test-utils'
import CountryOptions from '@/components/CountryOptions/CountryOptions.vue';

describe('CountryOptions Component', () => {
  it('should render correctly', () => {

    const wrapper = mount(CountryOptions, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
