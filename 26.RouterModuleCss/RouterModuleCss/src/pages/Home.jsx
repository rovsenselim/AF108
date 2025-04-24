import React from 'react'
import Header from "../components/navbar/Header";
import Main from "../components/main/Main";
import Title from "../components/title/Title";
import Customer from "../components/customer/Customer";
import Touch from "../components/touch/Touch";


const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <Title />
            <Customer />
            <Touch />

        </div>
    )
}

export default Home
