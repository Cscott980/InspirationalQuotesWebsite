const text_element =  document.getElementById("quote");
const author_element = document.getElementById("person");
const placeholder_text = document.getElementById("placeholder_text")

async function getQuote() {
   try {
    reset()
    const responce = await fetch('https://dummyjson.com/quotes')
    const data = await responce.json()

    const random_index = Math.floor(Math.random()*data["quotes"].length);
    const selected_quote = data["quotes"][random_index];

    text_element.innerText = `"${selected_quote.quote}"`;
    author_element.innerText = selected_quote.author ? `-${selected_quote.author}`: "-Unkown";

    
    } catch (error) {
        console.error("Error fetching the quote", error);
        document.getElementById("quote").innerText = "Opps we couldnt find anything. Try again.";
    }
    
}

function reset() {
    text_element.innerText = "";
    author_element.innerText = "";
    placeholder_text.innerText = "";

}