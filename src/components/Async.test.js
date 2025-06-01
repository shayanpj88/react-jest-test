import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Asynch Component", () => {
  test("Render posts if request succeeds", async () => {
    // simulate the async fetch function in Component to prevent sending real http request
    // Override the fetch function
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    render(<Async />);
    // use find to get await after 1 second as default
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
