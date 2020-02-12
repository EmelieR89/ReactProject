import React from "react";

interface Props {
  compiler: string;
  framework: string;
}

export default function App(props: Props) {
  return (
    <h1 style={style}>
      Hello from {props.compiler} and {props.framework}!
    </h1>
  );
}

//Styling
const centeredContent: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
};

const theme: React.CSSProperties = {
  color: "green"
};

//Vi har kombinerat all styling i centredContent och theme
const style = { ...centeredContent, ...theme };

// export class App2 extends React.Component<Props> {
//   render() {
//     const { compiler, framework } = this.props;
//     return (
//       <h1 style={{ color: "green" }}>
//         Hello from {compiler} and {framework}!
//       </h1>
//     );
//   }
// }
