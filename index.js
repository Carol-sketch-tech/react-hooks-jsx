// imparative programming
 const div = document.createEkement("div")
 div.id ="card1";
 div.className= "card";
 div.textContent= "Hello!";
 document.body.appendChild(div);

//  declarative programming 
const div =(
    <div id="card1" className="card">
        Hello
    </div>
);
ReactDOM.render(div, document.body);

// what does JSX look like 
function Tweet(){
    const currentTime = new Date().toString();
    // the return value in a functional component is 
    // JSX syntax.
    return (
        <div className="tweet">
            <img/>
            <div className="tweet_body">
                <p>We are writting this tweet in jsx.</p>
                <p>{Math.floor(Math.random()* 100)} retweets</p>
                <p>{currentTime}</p>
            </div>
        </div>
    )
}
// another example 
return <div id="tweet" className="tweet_body">{ <p>Whoa!</p>,<img src="google.com"/>}</div>
// the above code linde is naother way to write JSX syntax.


// SJX can include javascript.
//while writing our pseudo HTML in jasx we can also write vanilla javascript in-line.
// we do this by wrapping the javascript code inde curly braces.
 return (<p>{Math.floor(Math.random()* 100)}retweets</p>,
<p>{cuttentTime}</p>)
// note that we can use normal javascript in JSX by wrapping vannila javascript using curly braces.
// the code above.