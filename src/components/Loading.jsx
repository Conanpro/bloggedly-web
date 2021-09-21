import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    
`

const BlogWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    border-bottom: 1px solid #f5f4f0;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 40px 40px 10px 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const StyledBlog = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

const MetaData = styled.div`
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 2em;
    padding-bottom: 1.4em;
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
    border-radius: 40px 40px 0px 0px;
    background: rgba( 71, 159, 171, 0.05 );
    box-shadow: 0 8px 320px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.0px );
    -webkit-backdrop-filter: blur( 0.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom: 0;
`

const MetaInfo = styled.div`
    padding-right: 1em;
    margin-bottom: 0;
    border-radius: 10px;
    width: 100px;
    height: 17px;
    background-color: lightgray;
`

const MetaInfo2 = styled.div`
    padding-right: 1em;
    margin-bottom: 0;
    border-radius: 10px;
    width: 120px;
    height: 17px;
    background-color: lightgray;
`

const UserActions = styled.div`
    margin-left: auto;
    margin-bottom: 0;
`

const GlassContainer = styled.div`
    width: 2em;
    height: 2em;
    background: #ebebeb;
    padding: 0.35em;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Text1 = styled.div`
    width: 200px;
    height: 1em;
    background-color: lightgray;
    border-radius: 5px;
`

const Text2 = styled.div`
    width: 500px;
    height: 1em;
    background-color: lightgray;
    border-radius: 5px;
`

const Text3 = styled.div`
    width: 350px;
    height: 1em;
    background-color: lightgray;
    border-radius: 5px;
`

const Img = styled.div`
    height: 50px;
    width: 50px;
    background-color: lightgray;
    border-radius: 50%;
    border: 1px solid lightgrey;
    margin-right: 10px;
`

const BlogClick = styled.div`
    height: 235px;
    padding: 2em;
    cursor: pointer;
`

const TextDiv = styled.div`
    margin-top: 1.3em;
    padding: 0;
    height: 90%;
    width: 100%auto;
    margin-bottom: 2em;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const MetaWrap = styled.div`
    display: flex;
    flex-direction: column;
    height: 40px;
    justify-content: space-between;
`


const Loading = () => {
    return (
        <Wrapper>
            {[...Array(10)].map((el, index) => <BlogWrapper key={index}>
                <StyledBlog>
                    <MetaData>
                        <Img>
                        </Img>
                        <MetaWrap>
                        <MetaInfo>
                        </MetaInfo>
                        <MetaInfo2>
                        </MetaInfo2>
                        </MetaWrap>
                        <UserActions>
                            <GlassContainer></GlassContainer>
                        </UserActions>
                    </MetaData>
                    <BlogClick
                    >
                        <TextDiv>
                            <Text1></Text1>
                            <Text2></Text2>
                            <Text3></Text3>
                            <Text1></Text1>
                            <Text2></Text2>
                            <Text3></Text3>
                        </TextDiv>
                    </BlogClick>
                </StyledBlog>
            </BlogWrapper>)}
        </Wrapper>
    );
}
 
export default Loading;