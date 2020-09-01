import React from "react";
import { act } from 'react-dom/test-utils';
import { render, screen } from "@testing-library/react";
import EntitiesPage from "./EntitiesPage";
import dataE from "./dataE.json";

describe("Entities page", () => {
    beforeAll(() => jest.spyOn(window, "fetch"));
    let container;

    it("shows a list of Entities retrieved from an API", async () => {
        window.fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => dataE,
        });
    
        act(() => {
          render(<EntitiesPage />, container);
        });
        
        expect(window.fetch).toHaveBeenCalledWith("https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/entities");
        expect(window.fetch).toHaveBeenCalledTimes(1);
    });

    it("shows an error message when there's a network error", async () => {
        window.fetch.mockRejectedValueOnce(new TypeError("Network connection lost"));
      
        render(<EntitiesPage />);
      
        expect(await screen.findByText("There was a network error. Please try again in a few seconds.")).toBeInTheDocument();
    });
});
