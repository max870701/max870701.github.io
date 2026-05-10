import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
	it("renders the about navigation link", () => {
		render(
			<Router>
				<App />
			</Router>
		);

		expect(screen.getAllByRole("link", { name: /about/i }).length).toBeGreaterThan(0);
	});
});
