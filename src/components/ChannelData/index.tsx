import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  
    useEffect(() => {
      const div = messagesRef.current;
  
      if (div) {
        div.scrollTop = div.scrollHeight;
      }
    }, [messagesRef]);
  
    return (
      <Container>
        <Messages ref={messagesRef}>
          {Array.from(Array(15).keys()).map((n) => (
            <ChannelMessage
              key={n}
              author="Ruffles"
              date="02/10/2021"
              content="Finalizei a recriação da interface do Discord em React :)!"
            />
          ))}
  
          <ChannelMessage
            author="Jaziel Cavalcante"
            date="02/10/2021"
            content={
              <>
                <Mention>@Ruffles</Mention>, me carrega no LoL de novo por favor?
              </>
            }
            hasMention
            isBot
          />
        </Messages>
  
        <InputWrapper>
          <Input type="text" placeholder="Conversar em #bate-papo" />
          <InputIcon />
        </InputWrapper>
      </Container>
    );
};

export default ChannelData;