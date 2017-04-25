import React from 'react'
// import ReactDOM from 'react-dom'
import App from '../App'
// import { shallow, mount, render } from 'enzyme'
import { shallow } from 'enzyme'

/* global it describe shalllow expect beforeEach */

describe('App', () => {
  let app, wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
    app = wrapper.instance()
  })

  describe('toggleFilterStocked', () => {
    it('changes from false to true', () => {
      app.toggleFilterStocked()
      expect(app.state.filterStocked).toBe(true)
    })
    it('changes from true to false', () => {
      wrapper.setState({filterStocked: true})
      app.toggleFilterStocked()
      expect(app.state.filterStocked).toBe(false)
    })
  })

  describe('updateSearchString', () => {
    it('updates searchString', () => {
      app.updateSearchString('pancakes')
      expect(app.state.searchString).toBe('pancakes')
    })
    it('updates from a pre-existing searchString ', () => {
      wrapper.setState({searchString: 'Aang'})
      app.updateSearchString('Korra')
      expect(app.state.searchString).toBe('Korra')
    })
  })

  describe('updateInCart', () => {
    it('properly increments price', () => {
      app.updateInCart('Korok Seed', 299.99)
      expect(app.state.priceTotal).toBe(299.99)
    })
    it('properly decrements price', () => {
      wrapper.setState({priceTotal: 69})
      wrapper.setState({inCart: ['Master Sword']})
      app.updateInCart('Master Sword', 69)
      expect(app.state.priceTotal).toBe(0)
    })
    it('properly adds product to inCart', () => {
      app.updateInCart('Deku Nut', 299.99)
      expect(app.state.inCart).toEqual(['Deku Nut'])
    })
    it('properly removes item from cart', () => {
      wrapper.setState({inCart: ['Mirror Shield']})
      app.updateInCart('Mirror Shield', 69)
      expect(app.state.inCart).toEqual([])
    })

        // it ('properly decrements price', () => {
        //     wrapper.setState({priceTotal: 299.99})
        //     app.updateInCart....
        // })
  })
})
