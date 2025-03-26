function click (){
    const form = document.getElementById('myForm');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const toggleButton = document.getElementById('toggleButton');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      errorDiv.textContent = '';
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if (!name) {
        errorDiv.textContent = 'Name is required.';
        return;
      }
      if (!email) {
        errorDiv.textContent = 'Email is required.';
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)){
          errorDiv.textContent = 'Invalid email format.';
          return;
      }

      resultDiv.textContent = `Name: ${name}, Email: ${email}`;
      form.reset();
    });

    
      
    ;
}
function count(){
    if(document.querySelector('h1').innerHTML === "hello"){
        document.querySelector('h1').innerHTML = "goodbye";
    }
    else{
        document.querySelector('h1').innerHTML = "hello";
    }
    document.querySelector('#button1').addEventListener('click', function(){
        const count = document.getElementById('count');
        let value = count.textContent;
        value++;
        count.textContent = value;
    });
}
