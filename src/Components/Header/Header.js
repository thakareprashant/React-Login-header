import React from 'react'
import './Header.css'
let data  = ["home","about us","contact us","store","cart"]
export const Header = ({email}) => {
  data.pop();
  data.push(email);
  return (
    <>
        <div className='header-main-container'>
          {
            data.map((ele)=>{
              return(
                <div className='header-title-container'>
                   <div className='header-title'>{ele}</div>
                </div>
              )
            })
          }
           
        </div>
    </>
  )
}
