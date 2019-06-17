import "core-js/es/object";
import "core-js/es/array";
import "core-js/modules/es.promise";

import * as React from "react";
import {render} from "react-dom";
import App from "./app"

import "./test"

render(
    <App />,
    document.getElementById("app")
)
