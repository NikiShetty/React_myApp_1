import React from 'react';


class App extends React.Component {
    state = {
        arr: [3, 55, 7, 9],
        arrObj: [{ a: 10, b: "Ben" }, { a: 20, b: "Jen" }, { a: 30, b: "Tom" }]
    }
    render() {
        return (
            <div>
                {this.state.arrObj.map((x) => {
                    return (
                        <div>
                            {x.a}{x.b}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default App;
// {this.state.arr.map((x)=>{
//     return x
// })}
