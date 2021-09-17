import React from "react";
import Landing from "../landingpage/Landing";
import { MemoryRouter } from 'react-router-dom';
import { render,getByTestId , fireEvent} from "@testing-library/react";
import ReactDOM from "react-dom";
import Home from "../home/Home";
import Addchalenge from "../addchalenge/Addchalenge";
import '@testing-library/jest-dom/extend-expect'

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


it("renders landing page without  crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

test("correct headline",() =>{
    const component = render(<Landing/>)
    const headeing = component.getByTestId('heading')

    expect(headeing.textContent).toBe('HACK IDEAS')
})

it("App loads with initial state of empty", () => {
    const { container } = render(<Landing />);
    const countValue = getByTestId(container, "countvalue");
    expect(countValue.textContent).toBe("");
  });

  it("Submitting a id via the input field changes the id state value", () => {
    const { container, rerender } = render(<Landing />);
    const nameValue = getByTestId(container, "countvalue");
    //const inputName = getByTestId(container, "inputName");
    const submitButton = getByTestId(container, "submitRefButton");
    //first test case
    const newName = "1009";
    expect(nameValue.value).toEqual('');
    fireEvent.change(nameValue, {target:{
      value:newName
    }});
    expect(nameValue.value).toEqual(newName);

    fireEvent.click(submitButton);

    expect(window.alert()).toEqual(window.alert(newName))
    //second test case
    
    const newid = "1001";
    expect(nameValue.value).toEqual('1009');
    fireEvent.change(nameValue, {target:{
      value:newid
    }});
    expect(nameValue.value).toEqual(newid);
    fireEvent.click(submitButton);
    expect(mockHistoryPush).toHaveBeenCalledWith('/mainpage');

    
    
  });

  //home page
  it("renders home page without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  //Add Challenge

  it("renders Add Challenge page without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Addchalenge/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Submitting a id via the input field changes the id state value", () => {
    const { container, rerender } = render(<Addchalenge />);
    const cnameValue = getByTestId(container, "cname");
    const desname = getByTestId(container, "desname");
    const submitButton = getByTestId(container, "cbutton");
    //first test case
    const newName = "";
    const ades = ""
    expect(cnameValue.value).toEqual('');
    fireEvent.change(cnameValue, {target:{
      value:newName
    }});
    fireEvent.change(desname, {target:{
      value:ades
    }});
    expect(cnameValue.value).toEqual(newName);

    fireEvent.click(submitButton);

    expect(window.alert()).toEqual(window.alert('fill all feilds'))
    //second test case
    
    
    
    
  });

  