import React from "react";
import Landing from "../landingpage/Landing";
import { render,getByTestId , fireEvent} from "@testing-library/react";
import ReactDOM from "react-dom";
import Home from "../home/Home";
import '@testing-library/jest-dom/extend-expect'


it("renders landing page without  crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders home page without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
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

//   it("Submitting a id via the input field changes the id state value", () => {
//     const { container, rerender } = render(<Landing />);
//     const nameValue = getByTestId(container, "countvalue");
//     //const inputName = getByTestId(container, "inputName");
//     const submitButton = getByTestId(container, "submitRefButton");
//     const newName = "1001";
//     fireEvent.change(nameValue, newName);
//     fireEvent.click(submitButton);
//     expect(nameValue.textContent).toEqual(newName);
//     rerender(<Landing />);
//     expect(window.localStorage.getItem("id")).toBe(newName);
//   });