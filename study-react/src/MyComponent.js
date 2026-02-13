import React from "react";

const MyComponent = ({ name = "뉴진스" }) => {
    return <div>{name} 돌려줘</div>;
}

// MyComponent.defaultProps = {
//     name: '뉴진스'
// }

export default MyComponent;