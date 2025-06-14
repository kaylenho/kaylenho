//welcome message
window.addEventListener('DOMContentLoaded',()=>{
    addMessage("Hi, I'm Dad-X. Ask me anything =)","bot");
})

function sendMessage(){
    const messageInput = document.getElementById("input");
    const message = messageInput.value;

    if(message === "") return;

    addMessage(message,"user");

    setTimeout(()=>{
        const grokReply = getGrokReply();
        addMessage(grokReply, "bot");
    }, 800);

    //reset text inside textbox
    messageInput.value = "";
}

function addMessage(input, sender){
    console.log(`${input} from ${sender}`);
    const bubble = document.createElement("div");
    bubble.classList.add("message", sender); 

    if(input.startsWith('<img')){
        bubble.classList.add("img-message");
        bubble.innerHTML = input;
    }else{
        bubble.textContent = input;
    }


    const chatbox = document.getElementById("chatbox");
    chatbox.appendChild(bubble);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getGrokReply(){
    const responses=[
        "Sorry, there's too much sugar in that",
        "Ok, but Alfred Hitchcock is pretty cool",
        "I'll have to ask Grok",
        "I see, but Teslas are really awesome =)",
        "Are you serious",
        `<img src="dad_whatthe.svg" alt="*outraged* what the">`,
        "That's too woke for me",
        "=)"
    ];
    return responses[Math.floor(Math.random()*responses.length)];
}