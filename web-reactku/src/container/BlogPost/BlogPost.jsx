import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
	state = {		// This component is state component from react for statefull component
		listArtikel: []		// array variable that is used to store data from API
	}

	componentDidMount(){	// Component that is used to check when component has been mounted, so then call the API
		fetch(' https://jsonplaceholder.typicode.com/posts') // URL Address for API that we want to take the data
			.then(response => response.json())
			.then(jsonHasilAmbilDariAPI => {
				this.setState({
					listArtikel: jsonHasilAmbilDariAPI
				})
			})
	}

	render(){
		return(
			<div className="post-artikel"> 
				<h2>Daftar Artikel</h2>
				{
					this.state.listArtikel.map(artikel => {
						return <Post key={artikel.id}  judul={artikel.title} isi={artikel.body}/>
					})
				}
			</div>
		)
	}
}

export default BlogPost;