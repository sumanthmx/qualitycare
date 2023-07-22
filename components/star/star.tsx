import React from "react";

interface StarProps {
    large?: boolean
}
const MyPage = ({large}: StarProps) => {
    return(
        <svg className={`${large == true ? 'w-8 h-8' : 'w-6 h-6'} fill-current text-yellow-500`} viewBox="0 0 20 20">
            <path
                d="M10 1L12.39 6.5H18.28L13.92 10.49L16.31 16L10 12.72L3.69 16L6.08 10.49L1.72 6.5H7.61L10 1Z"></path>
        </svg>);
}

export default MyPage;