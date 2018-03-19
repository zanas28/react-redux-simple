import React, {Component} from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        // This binding is necessary to make `this` work in the callback
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e) {
        // console.log(`${this.state.title} and ${this.state.body}`)
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            // Convert a JavaScript object into a string with JSON.stringify().
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit} >
                    <div>
                        <label>Title: </label>
                        <br />
                        <input 
                            type="text"
                            onChange = {this.onChange}
                            name='title' 
                            value={this.state.title} 
                        />
                    </div>
                    <br />
                    <div>
                        <label>Title: </label>
                        <br />
                        <textarea
                            name='body'
                            onChange= {this.onChange}
                            value={this.state.body} 
                        />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                    <hr />
                </form>
            </div>
        )
    }
}

export default PostForm;