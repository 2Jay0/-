import React from "react";
import styled from "styled-components";

import ChatLogItem from "./ChatLogItem";


function ChatLogTemplate({chats}) {

  // chats 배열을 받아 저장해 둔 채팅 로그를 보여줌
  // ChatLogItem 컴포넌트 사용
  return (
    <ChatContainer>
          {/* 8주차 실습 구현 */}
          <h1 style={{ color: '#000'}}>Chat Log</h1>
          {chats.map((chat_content) => {
              return <ChatLogItem chat={chat_content} />
          })}

    </ChatContainer>
  );

}

const ChatContainer = styled.div`  
  width: 500px;
  margin: 10px;
  padding: 20px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역 모서리에 그림자
  //background-color: #fff; // 해당 영역의 배경색 변경
  // 8주차 실습 구현

  display: flex;
  flex-direction: column;
  border: 3px solid #fff9a3;
  border-radius: 20px;
  background-color: #fff9a3;
  box-shadow : 0px 0px 20px gray;
`;

export default ChatLogTemplate;