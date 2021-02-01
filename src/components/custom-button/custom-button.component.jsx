import React from 'react'
import  "./custom-button.styles.scss";

const CustomButton = ({children, ...otherProps}) => {
    console.log('cxxxxxxxxxx', children);
    console.log('cyyyyyyy', otherProps);

    return (
        <div>
            <button className="custom-button" {...otherProps}>
              {children}
            </button>
        </div>
    )
}
export default CustomButton;