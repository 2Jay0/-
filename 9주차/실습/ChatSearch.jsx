// 채팅 키워드 검색창 & 검색 버튼에 대한 컴포넌트 작성
import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";



function ChatSearch({ onSearchKeySubmit }) {
    const [KeywordState, setKeywordState] = useState("")

    const onKeywordChange = (e) => {
        setKeywordState(e.target.value)
    }

    const onKeywordSubmit = (e) => {

        e.preventDefault()

        if (!KeywordState) {
            alert('keyword를 입력하세요!');
            return;
        }
        else {
            onSearchKeySubmit(KeywordState);
        }

        setKeywordState({ keyword: "" })
    }
    return (
        <Form onSubmit={onKeywordSubmit}>
            <KeyWord>
                <TextField name="keyword"
                    onChange={(e) => onKeywordChange(e)}
                    value={KeywordState.keyword} id="outlined-multiline-static"
                    variant="outlined" label="keyword" />
                <Button
                    type="search"
                    onClick={onKeywordSubmit}
                    onKeyDown={onKeywordSubmit}
                    style={{ color: '#415e3e' }}>search</Button>
            </KeyWord>
        </Form>
    );
}


const Form = styled.form`
   margin: 10px;
`;

const KeyWord = styled.div`
    margin-top: 30px;
`;

const Button = styled.button`
  margin-top : 16px;
  padding : 6px;
`;

export default ChatSearch;
