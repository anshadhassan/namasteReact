const heading = React.createElement( "div",  { id: "heading"}, [ 
        React.createElement("h1", {id: "heading"}, "Hellow from child"),
        React.createElement("h1", {id: "heading"}, "Hellow from child")
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)