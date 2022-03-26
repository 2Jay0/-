import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

// Sending Message 부분
function MessenagerTemplate({getChatLog}) {
  const [ MsgState, setMsgState ] = useState({ message: "", username: ""})

  const onMsgChange = (e) => {
		setMsgState({ ...MsgState, [e.target.name]: e.target.value })
	}

  // 메시지 입력 창에서 빈 경우에는 ‘메시지를 입력하세요‘라는 내용의 경고 창 출력 후 리턴(alert 함수 사용)
  // 사용자의 이름 입력 창이 빈 경우에는 사용자 이름을 ‘이름없음’으로 저장
  // MsgState의 속성(키)들의 값을 빈 문자열로 초기화
const onMsgSubmit = (e) => {
    e.preventDefault();
    // 8주차 실습 구현
    if (!MsgState.username) MsgState.username = "이름없음";
    if (!MsgState.message) {
        alert("메세지를 입력하세요");
        return;
    }
    getChatLog(MsgState.username, MsgState.message);
    setMsgState({ message: "", username: "" });
}

  return (
      <Form onSubmit={onMsgSubmit}>
          {/* 8주차 실습 구현 */}
          <Title>
              <h1>Sending Message</h1>
          </Title>

          <UserName>
              <TextField
                  variant="outlined"
                  label="UserName"
                  name="username"
                  onChange={onMsgChange}
                  value={MsgState.username}
            />
          </UserName>
          <MessageContents>
              <TextField
                  variant="outlined"
                  label="Message"
                  name = "message"
                  onChange={onMsgChange}
                  value={MsgState.message}
            />
          </MessageContents>
          <Button
              type="submit"
              onClick={onMsgSubmit}
              onKeyPress={onMsgChange}
              style={{ color: '#415e3e'}}
          >
            SEND
          </Button>
		</Form>
  );
}

// Sending Message 글씨 박스
const Title = styled.h1`
  margin: 10px;
  padding: 10px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역의 배경색 변경
  // 해당 영역 안 텍스트 폰트색 변경
  // 8주차 실습 구현

  width : 500px;
  font-size : 17px;
  color : #ffff;
  align-self: center;
  flex-direction: column;
  border: 3px solid #c9b040;
  border-radius: 10px;
  background-color: #c9b040;
`;

// 채팅 메시지 입력 form
const Form = styled.form`
  width: 500px;
  margin: 10px;
  padding: 20px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역 모서리에 그림자
  // 해당 영역의 배경색 변경
  // 8주차 실습 구현

  display: flex;
  flex-direction: column;
  border: 3px solid #ffffdf;
  border-radius: 20px;
  background-color: #ffffdf;
  box-shadow : 0px 0px 20px gray;
`;

// username 표시
const UserName = styled.div`
  margin: 40px;
`;

// 채팅 메시지 부분
const MessageContents = styled.div`
  margin: 30px;
`;

// send 버튼
const Button = styled.button`
  margin-top: 60px;
  padding: 10px;
  // 해당 영역 모서리를 둥글게
  // 해당 영역 모서리색 변경
  // 해당 영역의 배경색 변경
  // 8주차 실습 구현

  width : 60px;
  height : 30px;
  display: flex;
  flex-direction: column;
  border: 3px solid #c9b040;
  border-radius: 5px;
  align-self : center;
  background-color: #ffff;
  cursor : pointer;
  &:focus {
    outline: none;
  }
`;

export default MessenagerTemplate;