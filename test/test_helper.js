import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Stub Google Analytics, fetch
let ga    = () => null,
    fetch = require('jest-fetch-mock')

fetch.mockResponse('{}')

// Make some functions available in all test files without importing
Object.assign(global, {
  React,
  shallow, render, mount,
  ga, fetch
})

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
