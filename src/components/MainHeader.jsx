import React from 'react'
import {styled} from 'styled-components'

const MainHeader = () => {
  return (
    
      <Header>
        <nav>
            <ul>
                <li>Товары</li>
                <li>Услуги</li>
                <li>Компания</li>
            </ul>
        </nav>
        <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU" alt="" /></div>
        <div className="headerSearch"><input type="text" placeholder='Поиск' /></div>
      </Header>

  )
}

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    /* margin-top: 15px; */
    align-items: center;
    background: orange;
    padding: 5px 0px;
    cursor: pointer;
ul {
    display: flex;
    gap: 35px;
    font-size: 20px;
}

li {
    list-style: none;
}

.logo img {
    width: 60px;
}

.headerSearch input {
    width: 100px;
    text-align: center;
    font-size: 20px;
    border-left: none;
    border-right: none;
    border-top: none;
    outline: none;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

export default MainHeader
