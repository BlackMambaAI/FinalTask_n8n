const init = () => {
  console.log("RavPass chat works");
}

const url = "http://localhost:5678/webhook/9f4f1094-36a9-4911-bb98-143e970dac84/chat"

const doApi = async(_prompt) => {
  
  const chat_id = Date.now();
  const body = {
    "chatInput":_prompt,
    "action": "sendMessage",
    "sessionId":chat_id
  }
  try{
    const {data} = await axios({
      method:"POST",
      url:url,
      headers: {}, 
      data:body
    })
    const id_div = document.getElementById("id_div");
    id_div.innerHTML = `${data.output} <hr>`
    console.log(data);
  }
  catch(err){
    console.log(err);
  }
}

const onSub = (e) => {
  e.preventDefault();
  console.log("form send");
  const input_val = document.getElementById("id_input").value;
  doApi(input_val);
}


init();