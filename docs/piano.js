
    var context= new AudioContext();
 
    function jsNota(frecuencia){
            var o= context.createOscillator();
            g=context.createGain();
            o.connect(g);
            o.type="sawtooth";
            o.frequency.value=frecuencia;
            g.connect(context.destination);
            o.start(0);
            g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime +1.5);
    }


    $body =document.getElementById('body');

    $body.addEventListener('keydown',(e)=>{

        if(e.key=='s'){
                jsNota(174.614); 
        }

        if(e.key=='w'){
                jsNota(184.997); 
        }

        if(e.key=='d'){
                jsNota(195.998); 
        }

        if(e.key=='e'){
                jsNota(207.652); 
        }

        if(e.key=='f'){
                jsNota(220.000); 
        }

        if(e.key=='r'){
                jsNota(233.082); 
        }

        if(e.key=='g'){
                jsNota(246.942); 
        }

        if(e.key=='j'){
                jsNota(261.626); 
        }

        if(e.key=='i'){
                jsNota(277.183); 
        }

        if(e.key=='k'){
                jsNota(293.665); 
        }

        if(e.key=='o'){
                jsNota(311.127); 
        }

        if(e.key=='l'){
                jsNota(329.628); 
        }


    })