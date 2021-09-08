import styled from 'styled-components'

export default function Home() {
    return(
        <Page>
            <Text>Redirecting shortly...</Text>
        </Page>
    )
}

const Page = styled.div`
    background: #fff;
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h1`
    font-size: 20px;
    font-family: 'Inter';
`