import React from "react";

const MyComponent = ({ name = "뉴진스", children }) => {
    return (
        <div>{name} 돌려줘 <br />
            {children}는 children 값
        </div>
    );
}

export default MyComponent;