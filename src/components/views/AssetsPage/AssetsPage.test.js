import React from "react";
import { render, screen } from "@testing-library/react";
import AssetsPage from "./AssetsPage";
import data from "./data.json";

describe("Assets page", () => {
    beforeAll(() => jest.spyOn(window, "fetch"));

    it("shows a list of Assets retrieved from an API", async () => {
        window.fetch.mockResolvedValueOnce({
          ok: true,
          json: async () => data,
        });
    
        render(<AssetsPage />);
        
        expect(window.fetch).toHaveBeenCalledWith("https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/assets");
        expect(window.fetch).toHaveBeenCalledTimes(1);
    });

    it("shows an error message when there's a network error", async () => {
        window.fetch.mockRejectedValueOnce(new TypeError("Network connection lost"));
      
        render(<AssetsPage />);
      
        expect(await screen.findByText("There was a network error. Please try again in a few seconds.")).toBeInTheDocument();
    });
});
