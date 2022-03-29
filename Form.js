class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3");
        this.input = createInput();
        this.button = createButton("Enviar");
        this.apellido= createElement("h3");
        this.input1 = createInput();
        this.telefono= createElement("h3");
        this.input2= createInput();
        this.genero= createElement("h3")
        this.input3= createInput();
    }
    display(){
        this.title.html("Mi base de datos");
        this.title.position(130,0);
        this.nombre.html("Ingresa tu nombre");
        this.nombre.position(130,100);
        this.apellido.html("Ingresa tu apellido");
        this.apellido.position(130,200);
        this.telefono.html("Ingresa tu telefono");
        this.telefono.position(130,300);
        this.genero.html("Ingresa tu genero");
        this.genero.position(130,400);

        this.input.position(130,160);
        this.button.position(500,560);
        this.input1.position(130,260);
        this.input2.position(130,360);
        this.input3.position(130,460);
        
        this.button.mousePressed(()=>{
            persona.nombre=this.input.value();
            persona.update();
            persona.apellido=this.input.value();
            persona.update();
            persona.telefono=this.input.vale();
            persona.update();
            persona.genero=this.input.vale();
            persona.update();
        })
    }
}