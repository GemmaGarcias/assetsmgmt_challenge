import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { createMemoryHistory } from "history";
import { Router } from "react-router";

test("redirects to assets page", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App/>
    </Router>
  );
  expect(history.location.pathname).toBe("/assets");
});
