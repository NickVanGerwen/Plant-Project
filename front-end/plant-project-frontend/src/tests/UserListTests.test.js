import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import UserList from "../components/UserList";

const group = {
    "userCount": 0,
    "plantCount": 0,
    "id": 1,
    "name": "Thuis",
    "password": "123",
    "users": [
        {
            "groupCount": 0,
            "id": 1,
            "name": "Nick",
            "password": "123",
            "groups": null
        }
    ],
    "plants": null
}

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

it("renders user table", () => {
    act(() => {
        render(<UserList />, container);
    });
    expect(container.textContent).toContain("Naam");
});

it("renders user table with data", () => {
    act(() => {
        render(<UserList Group={group} />, container);
    });
    expect(container.textContent).toContain("Nick");
});

