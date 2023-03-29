var el_down = document.getElementById("geeks");
          
        function mdp() {
            el_down.innerHTML = 
                Math.random().toString(36).slice(2) + 
                Math.random().toString(36)
                    .toUpperCase().slice(2);
            } 