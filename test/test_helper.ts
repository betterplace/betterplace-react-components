import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Stub Google Analytics, fetch
const ga = () => null

fetch.mockResponse('{}')

// Make some functions available in all test files without importing
Object.assign(global, {
  ga,
  fetch,
})

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message)
}
