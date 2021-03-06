import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChannelButton channelName="bate-papo" />
            <ChannelButton channelName="trabalho" />
            <ChannelButton channelName="mta" />
            <ChannelButton channelName="lol" />
            <ChannelButton channelName="minecraft" />
        </Container>
    )
};

export default ChannelList;