import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import PlantList from "../components/PlantList";


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
    "plants": [
        {
            "id": 1,
            "name": "vensterbank links",
            "type": "Aloë vera",
            "waterTime": "2021-12-12T10:26:24.2109285",
            "waterIntervalInDays": 10
        }
    ]
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

it("renders plant table", () => {
    act(() => {
        render(<PlantList group={group} />, container);
    });
    expect(container.textContent).toContain("Water nodig");
});


// it("renders plant table with data", () => {
//     //     jest.spyOn(global, "fetch").mockImplementation(() =>
//     //     Promise.resolve({
//     //       json: () => Promise.resolve(group)
//     //     })
//     //   );

//     act(() => {
//         render(<PlantList group={group} />, container);
//     });
//     expect(container.querySelector("[data-testid='plantlist']").textContent).toContain("vensterbank links");

//     // await act(() => {
//     //     render(<PlantList group={group} />, container);
//     // });
//     // expect(container.textContent).toContain("vensterbank midden");
// });
