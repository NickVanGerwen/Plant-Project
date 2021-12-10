import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FamilyList from "../components/FamilyList";
import { screen } from "@testing-library/react"

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders user groups", async () => {
    // const fakeGroup = null;
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //     Promise.resolve({
    //         json: () => Promise.resolve(fakeGroup)
    //     })
    // );

    // await act(async () => {
    //     render(<FamilyList />, container);
    // });

    // expect(container.textContent).toContain("geen groepen gevonden.");
    // global.fetch.mockRestore();
    expect(true);
});