import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { greet } from "../src/index.js";

describe("greet", () => {
                                                                                                    it("returns a greeting for the default name", () => {
                                                                                                                                                                                                        assert.equal(
                                                                                                                                                                                                                                                                                                            greet(),
                                                                                                                                                                                                                                                                                                            "Hello, world!",
                                                                                                                                                                                                        );
                                                                                                    });

                                                                                                    it("returns a greeting for a provided name", () => {
                                                                                                                                                                                                        assert.equal(
                                                                                                                                                                                                                                                                                                            greet(
                                                                                                                                                                                                                                                                                                                                                                                                                "Node",
                                                                                                                                                                                                                                                                                                            ),
                                                                                                                                                                                                                                                                                                            "Hello, Node!",
                                                                                                                                                                                                        );
                                                                                                    });
});
