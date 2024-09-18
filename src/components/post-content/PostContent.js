import React, { useState } from "react";
import DOMPurify from "dompurify";
import {
  Container,
  InnerContainer,
  Title,
  Sub,
  SubContainer,
  ContentContainer,
  Content,
  ImageContainer,
} from "./PostContent.style";

const ServerHTMLRendering = ({ htmlString }) => {
  const sanitizedHTML = DOMPurify.sanitize(htmlString);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />;
};

function PostContent({ clickedPost }) {
  const { title, baseUrl, image, writer, update_dt, content } = clickedPost;
  const [imageUrl, setIamgeUrl] = useState(`${baseUrl}${image}`);

  const handleTransferDate = (itemDate) => {
    const data = JSON.parse(itemDate);
    const date = new Date(data.time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  return (
    <Container>
      <InnerContainer>
        <Title>
          <h1>{title}</h1>
        </Title>
        <Sub>
          <SubContainer>
            <strong>작성자 {writer}</strong>
            <strong>등록일 {handleTransferDate(update_dt)}</strong>
          </SubContainer>
        </Sub>
        <Content>
          <ContentContainer>
            {image === "" || image.startsWith("http") ? null : (
              <img src={imageUrl} alt={title} />
            )}
            <ServerHTMLRendering htmlString={content} />
          </ContentContainer>
        </Content>
      </InnerContainer>
    </Container>
  );
}

export default PostContent;
