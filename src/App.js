import Changepic from './First/first';
import InputCompo from './Second/input'
import Form from './Third/index'

function App() {
  const pics = [
    "https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-leverage-of-coding.jpg",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://media.istockphoto.com/id/1400359666/photo/network-security-security-security-system-technology-internet-safety-big-data-encryption.jpg?b=1&s=170667a&w=0&k=20&c=F1TGGC8cIkPrTKssEdTSJVujW7j3CCnWiRe2lY5ziLg=",
    "https://media.istockphoto.com/id/1361590339/photo/selfie-out-of-this-world-astronauts-in-futuristic-suits-taking-photo-and-setting-the-light.jpg?b=1&s=170667a&w=0&k=20&c=_UowiCz5nEYpkkqdy4-9Wh0ZzSAEh38MkbnJToqI4Pw="
  ]

  return (
    <>
      <Changepic  source = {pics} />
      <InputCompo/>
      <Form/>
    </>
  );
}

export default App;
