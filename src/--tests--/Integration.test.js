import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { shallow, mount, render } from 'enzyme'

/* global it */

describe('integration test', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<App />, div)
    })

    it('will render the right number of table rows', () => {
        const app = mount(<App/>)
        expect(app.find('tr').length).toBe(23)
    })

    describe('searching', () => {
        it('will filter out-of-stock items when filterStock is checked', () => {
            const app = mount(<App/>)
            app.find('#filterStockedCheckBox').simulate('click')
            expect(app.find('tr').length).toBe(14)
        })

        it('will filter items by text when entered into searchbox', () => {
            const app = mount(<App/>)
            const event = {target: {value: 'ball'}}
            app.find('#searchStringBox').simulate('change', event)
            expect(app.find('tr').length).toBe(6)
        })

        it('will filter items by text when entered into searchbox and Filterstock is checked', () => {
            const app = mount(<App/>)
            const event = {target: {value: 'ball'}}
            app.find('#searchStringBox').simulate('change', event)
            app.find('#filterStockedCheckBox').simulate('click')
            expect(app.find('tr').length).toBe(5)
        })
    })

    describe('price totalling', () => {

      it('total price of single product checked', () => {
        const app = mount(<App/>)
        const event = {}
        const inventoryItem = {name: 'Football', price: 49.99}
        app.find('#football').simulate('change', inventoryItem)
        expect(app.find('#priceTotal').text()).toBe('$49.99')
      })

      it('total price of product checked twice', () => {
        const app = mount(<App/>)
        const event = {}
        const inventoryItem = {name: 'Football', price: 49.99}
        app.find('#football').simulate('change', inventoryItem)
        app.find('#football').simulate('change', inventoryItem)
        expect(app.find('#priceTotal').text()).toBe('$0')
      })


      it('total price of multiple products checked', () => {
        const app = mount(<App/>)
        const event = {}
        const apple = {name: 'Red Apple', price: 1.99}
        const orange = {name: 'Navel Orange', price: 0.99}
        app.find('#red-apple').simulate('change', apple)
        app.find('#navel-orange').simulate('change', orange)
        expect(app.find('#priceTotal').text()).toBe('$2.98')
      })
    })
})