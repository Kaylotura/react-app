import React from 'react'
import SearchBar from '../SearchBar'
// import { shallow, mount, render } from 'enzyme'
import { shallow } from 'enzyme'

/* global it describe expect beforeEach jest */

describe('SearchBar', () => {
  let wrapper
  beforeEach(() => {
    const myFakeFunc = jest.fn()
    wrapper = shallow(<SearchBar
      handleSearchString={myFakeFunc}
      handleFilterStockedToggle={myFakeFunc}
    />)
  })

  describe('searchStringBox', () => {
    it('makes appropraite callback from text input', () => {
      const event = {target: {value: 'bacon'}}
      wrapper.find('#searchStringBox').simulate('change', event)
      expect(myFakeFunc.mock.calls.length).toBe(1)
    })
  })
})
