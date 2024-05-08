import React from "react";

const Context = React.createContext({
    increment: () => {},
    decrement: () => {}
});

export default Context;