import React,{Component} from 'react';
import { Header,Footer } from './Layouts';

//单页应用入口
export default class extends Component{
	render(){
		return <div>
				<Header></Header>
			    <h1>hi from react</h1>
			    <Footer></Footer>
			   </div>
	}

}