import Head from "next/head";
import React, {Component} from "react";
class Home extends Component {
  static async getInitialProps(){
    return({
      time: new Date().toString()
    })
  }
  constructor(props){
    super(props);
    this.state = {
      time: props.time
    }
  }

  tic() {
    this.setState({
      time: new Date().toString()
    })
  }
  componentDIdMount(){
    this.interval = setInterval(()=> this.tic(), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render() { 
    return (
    <>
      <Head>
        <title>Server</title>
      </Head>
      <main className="bg-slate-400 h-screen">
        <h1>{this.state.time}</h1>
      </main>
    </>

    );
  }
}
 
export default Home;