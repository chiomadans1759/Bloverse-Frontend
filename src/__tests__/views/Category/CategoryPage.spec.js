import { mount, createLocalVue, RouterLinkStub  } from '@vue/test-utils';
import Category from '@/views/general/Category/CategoryPage.vue';
import categoryData from '@/fixtures/category.js';

import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ChooseCategory Component', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      addToCategories: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        consumers: {
          selectedCategories: [...categoryData],
        }
      },
      actions
    })
  });

  it('dispatches "actionInput" when input event value is "input"', () => {
    const wrapper = mount(Category, { 
      store, 
      localVue,
      stubs: {
        RouterLink: RouterLinkStub
      }
    });

    wrapper.find('.overlay').trigger('click');
    expect(actions.addToCategories).toHaveBeenCalled();
    expect(wrapper.element).toMatchSnapshot();
  })
});
