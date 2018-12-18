import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import waitForExpect from 'wait-for-expect'

import configureStore from '../../../../store'
import ComposedMessages, { Messages, MessageBox, Message } from './Messages'
import { receiveMessage } from '../../../../actions/conversation';

describe('<Messages />', () => {
  it(`should send a message (unit test)`, async () => {
    // 1. shallow the <Messages /> component
    // You can use console.log(wrapper.debug()) to console.log the component that you are testing
    const wrapper = shallow (<Messages/>)
    console.log(wrapper.debug())
    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />
// .not. // to test

// test line 80 on message
// expect(receiveMessage).toHaveBeenCalled() 

    wrapper.find(wrapper).toMatchSnapshot(api.ComposedMessages)
    // 3. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering

     //  wrapper.find('button').debug() // can use the debug() find right thing
    
     wrapper.find('button').simulate('click');
    
    // 4. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
   it('simulates click events', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
      wrapper.find('button').simulate('click');
      expect(onButtonClick).to.have.property('callCount', 1);
    }
    // 5. Assert the 'message was sent' -> 
    //      You can use toHaveBeenCalled on the my_mocked_api_object you passed. 
    //      toHaveBeenCalled needs a mock function https://jestjs.io/docs/en/mock-functions, is your sendMessage a mock?
    //      You have an example here http://airbnb.io/enzyme/#shallow-rendering heads-up!
    //      Enzyme expectations are not camel case,
    //      Jest expectations are camel case (for when you copy&paste :)

    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  })

  it(`should send a message (integration test)`, async () => {
    // 1. shallow or mount the <Messages /> component ?
    //    A) which component, Messages or ComposedMessages?
    //    B) If you mountc the component then all the children are rendered. Hint: you need to provide a store.
    const store= configureStore()
    const mockApi ={
      sendMessage: jest.fn(Message => Promise.resolve({id:1, ...Message}))
    }
    const wrapper= mount (
    <Provider store={store}>
    <ComposedMessages/>
    </Provider>
        )

    // 2  Mock the api. Hint, the api functions are passed as a defaultProp (look at the bottom of Messages.js),
    // you can override that prop by doing <Messages api={my_mocked_api_object} />

    // 3. Add some text to the input
    // Hint: wrapper.find(MessageBox).props().onChange({ target: { value: 'hi!' }})
    wrapper.find(MessageBox).props().onChange({ target: { value: 'hi!' }})
    // 4. Find the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    wrapper.find('button').simulate('click')
    // 5. Click on the button -> you have an example here http://airbnb.io/enzyme/#shallow-rendering
    // Heads-up! you need to use await on the click button. Or even better use https://www.npmjs.com/package/wait-for-expect

    // 6. You need to update the rendered component using http://airbnb.io/enzyme/docs/api/ShallowWrapper/update.html
wrapper.update()

    // 7. Assert the 'message was sent' -> you can just validate the message you sent is on the Messages list
expect (wrapper.find(Message).length).toBe(1)
    // Final questions:
    // - Is this black-box testing or white-box testing?
    // - If I remove Redux from my application and put all the state in React, do I need to update this test?
    // - What's your level of confidence that the user will be able to send a message?
  })
})
