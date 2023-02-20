/*Debemos hacer 2 validaciones:
    1. validar el contenido
    2. validar campos obligatorios
*/

const form=document.getElementById("registro");

//contenido. Usamos la delegación de eventos para usar el evento "change", este evento indica que se insertó un string o algun tipo de dato en el input, y cambió.
form.addEventListener("change", (e)=> {
    const inputs = document.querySelectorAll("#registro input");
        inputs.forEach((input) => {
            if(e.target===input){
                // console.log(input.value);
                let span = document.querySelector(`#${input.id}Span`);
                //creo el span de forma dinámica
                if(!span){
                    const spanVirtual=document.createElement("span");
                    spanVirtual.id=`${input.id}Span`
                    spanVirtual.classList.add(`error`, `none`);
                    spanVirtual.textContent=input.title;
                    span=spanVirtual;
                    input.insertAdjacentElement("afterend", span);
                };

                let validacion;
                switch (input.id) {
                    case "user":
                        //.trim() elimina los espacios
                        validacion=input.value.trim().match(/^[a-z0-9]+$/g);
                        break;

                    case "emailRegistro":
                    validacion=input.value.trim().match(/[-.\w]+@([\w-]+\.)+[\w-]+/g);
                        break;

                    case "emailRepetir":
                        const mail=document.querySelector("#emailRegistro");
                        input.value.trim()===mail.value.trim() 
                        ? (validacion=true) 
                        : (validacion=false);
                        break;

                    case "pass":
                        validacion=input.value.trim().match(/^[A-z\d@$_\-?¡!]{8,16}$/g);
                        break;

                    case "passRepetir":
                        const pass=document.querySelector("#pass");
                        input.value.trim()===pass.value.trim() 
                        ? (validacion=true) 
                        : (validacion=false);
                        break;
                };

                if(span.textContent !== input.title) span.textContent = input.title;

                (validacion === null || validacion === false) && (input.value !== "" || input.value.includes(" ")) 
                ? span.classList.remove("none") 
                : span.classList.add("none");
            };
        });
    });


//Validar campos obligatorios
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const inputs = document.querySelectorAll("#registro input");

    inputs.forEach(input => {
        let span = document.querySelector(`#${input.id}Span`);
        
        if(!span){
            const spanVirtual = document.createElement("span");
            spanVirtual.id = `#${input.id}Span`;
            spanVirtual.classList.add("error", "none");
            spanVirtual.textContent = "campo requerido";
            span = spanVirtual;
            input.insertAdjacentElement("afterend", span);
        };

        if(span.textContent !== "campo requerido") span.textContent = "campo requerido";
        if(input.value === "") span.classList.remove("none");
        else span.classList.add("none");
    });
});

//formulario contacto:
const form2 = document.querySelector("#contacto");

form2.addEventListener("change", (e)=>{
    const inputs2 = document.querySelectorAll("#contacto input");
    inputs2.forEach((input)=>{
        if(e.target===input){
            let span = document.querySelector(`#${input.id}Span`);
                if(!span){
                    const spanVirtual=document.createElement("span");
                    spanVirtual.id=`${input.id}Span`
                    spanVirtual.classList.add(`error`, `none`);
                    spanVirtual.textContent=input.title;
                    span=spanVirtual;
                    input.insertAdjacentElement("afterend", span);
                };

            let validacion2;
            switch (input.id) {
                case "nombre":
                    validacion2=input.value.trim().match(/[A-z]/gi);
                    break;

                case "email2":
                validacion2=input.value.trim().match(/[-.\w]+@([\w-]+\.)+[\w-]+/g);
                    break;

                case "textarea":
                    validacion2=input.value.trim().match(/^[A-z\d@$_\-?¡!]{1,250}$/g);
                    break;
            };

            if(span.textContent !== input.title) span.textContent = input.title;

                (validacion2 === null || validacion2 === false) && (input.value !== "" || input.value.includes(" ")) 
                ? span.classList.remove("none") 
                : span.classList.add("none");
        };
    });
});
//Campos requeridos
form2.addEventListener("submit", (e)=> {
    e.preventDefault();
    const inputs2 = document.querySelectorAll("#contacto input");

    inputs2.forEach(input => {
        let span = document.querySelector(`#${input.id}Span`);
        
        if(!span){
            const spanVirtual = document.createElement("span");
            spanVirtual.id = `#${input.id}Span`;
            spanVirtual.classList.add("error", "none");
            spanVirtual.textContent = "campo requerido";
            span = spanVirtual;
            input.insertAdjacentElement("afterend", span);
        };

        if(span.textContent !== "campo requerido") span.textContent = "campo requerido";
        if(input.value === "") span.classList.remove("none");
        else span.classList.add("none");
    });
});