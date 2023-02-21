import React from 'react'
import Mapper from './Mapper';
import PrismaZoom from 'react-prismazoom'
import '../App.css';
import BotanicalLogo from './BotanicalLogo';
import BottomNav from './BottomNav';


const Main = () => {
    return (
        <div className='mainDiv' >
            <BotanicalLogo/>
            <BottomNav/>
            <PrismaZoom maxZoom={18} minZoom={1}>
                <Mapper/>
            </PrismaZoom>
        </div>
    )
}

export default Main