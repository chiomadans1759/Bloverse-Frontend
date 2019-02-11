import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import Country from '@/views/general/Country/CountryPage.vue';
import countryData from '@/fixtures/country.js';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ChooseCountry Component', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addToCountries: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        consumers: {
          selectedCountries: [...countryData],
        }
      },
      actions
    })
  });

  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = mount(Country, {
      store,
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    wrapper.find('.overlay').trigger('click');
    expect(actions.addToCountries).toHaveBeenCalled();
    expect(wrapper.element).toMatchSnapshot();
  })
});
