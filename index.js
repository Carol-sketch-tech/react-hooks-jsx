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
return <div id="tweet" className="tweet_body">{ <p>Whoa!</p>,<img src="google.com"/> ,function statement(){
    if(isHello == true){
        return" Hello";
    }else{
        return "goodbye"
    }
}}</div>

// the above code linde is naother way to write JSX syntax.


// SJX can include javascript.
//while writing our pseudo HTML in jasx we can also write vanilla javascript in-line.
// we do this by wrapping the javascript code inde curly braces.
 return (<p>{Math.floor(Math.random()* 100)}retweets</p>,
<p>{cuttentTime}</p>)
// note that we can use normal javascript in JSX by wrapping vannila javascript using curly braces.
// the code above.

// JSX works with expression not statemenets 
// in order for our JSX to be converted into regular javascript the JSX we write must be in the form of a 
// expression not a statement.
// for instance the if statments are not valid in JSX.
return ( <h1 id="header">{if(true){
    "Hello"
}else{"GoodBye"}}</h1>)
// the above code block with an if statement is not a valid JSX.
// however, the ternary expression does work
return (<h1 id="header">{true?"Hello":"Goodbye"}</h1>)//this works as a substitue for a if..else statement.
// this is because  statemens do not have a return value, while expressions do 

// if you want to use is statements you have to express the code in functions.for example
function Header(){
    function getHeaderText(isHello){
        if(isHello){
            return "Hello";
        }else {return "Goodbye"}
    }
    return <h1 id="header" >{getHeaderText(true)}</h1>
}

// A component can render another component using JSX.
function Header(){
    return <h1>Hello</h1>
}

function Page(){
    return(
        <div>
            <Header/>
            <p>Some great Content in here</p>
        </div>
    );
}
// when writing our HTML elements in JSX the names if the elements should all be in lowecase, 
// just like we tyoically write normal HTML elements.
// when we are writing componenets in JSX, the name of the component must be capitalized. this is hiw react can differenciate 
// <Header/> and the normal <header/>element.

// A component Must return One Jsx ELEMENT.
function PlainDiv() {
    return <div>I am one line, so I do not need the parentheses</div>;
  }
  
  const Photo = () => {
    return (
      <figure>//this is the one element
        <img
          className="image"
          src="https://s3.amazonaws.com/ironboard-learn/sunglasses.gif"
        />
        <figcaption>Whoa</figcaption>
      </figure>
    );
  };
  
  const Table = () => (
    <table>// this is the one element.
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      <tr>
        <th>312213</th>
        <th>Tim Berners-Lee</th>
      </tr>
    </table>
  );
  
  function ParentComponent() {
    return (
      <main>//this is the one element.
        <PlainDiv />
        <Photo />
        <Table />
      </main>
    );
  }
//   Each of these are valid components but all if these components have one returned JSX 
// element that contains everything else.