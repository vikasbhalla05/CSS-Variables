// function for the event listener
    function handleUpdate (){
      // console.log(this.value);
      let suffix = this.dataset.sizing || ''; // px for the data inputs and blank for color

      // access css variable in javascript
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
      //getting and setting of the css varibles    
    }

    let inputs = document.querySelectorAll('.controls input'); // nodelist

    inputs.forEach( input => input.addEventListener( 'change',
      handleUpdate
    ))
    inputs.forEach( input => input.addEventListener( 'mousemove',
      handleUpdate
    ))

    // multiple eventlisteners in one element
    // ['change','mousemove'].forEach(evt => inputs.addEventListener(evt, handleUpdate)
    // );