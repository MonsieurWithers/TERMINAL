document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById('ascii-art');
    const text = `
                                                                                                                                                              
                                                                               @@                                                                                
                                                                             =@@@@                                                                               
                                                                             @@@@@@                                                                              
                                                                           @@@@@@@@@                                                                             
                                                  *                       %@@@@@@@@@@                       *                                                    
                                                  *##*                   @@@@@@@@@@@@@.                  *###                                                    
                                                   ######               @@@@@@@@@@@@@@@:              *#####*                                                    
                                                   #########-          @@@@@=@@@@@ @@@@@@          *########                                                     
                                                   *###########*      @@@@@  %@@@@  @@@@@#     -############                                                     
                                                   *#############    @@@@@   %@@@@   @@@@@@   *############*                                                     
                        .@@@@@@@@@@@@@@@@@@@@@@@@   ############   #@@@@@    %@@@@    +@@@@@   *###########-  @@@@@@@@@@@@@@@@@@@@@@@@%                          
                      @     @@@@@@@@@@@@@@@@@@@@@*  ##########*   =@@@@@     %@@@@     .@@@@@   *##########   @@@@@@@@@@@@@@@@@@@@@-    %#                       
                      .@@@     @@@@@@@@@@@@@@@@@@@  *########*   @@@@@@      %@@@@       @@@@@   *#########  %@@@@@@@@@@@@@@@@@@     @@@+                        
                        @@@@@=    +@@@@@@@@@@@@@@@   #######*   @@@@@@       %@@@@        @@@@@   *########  @@@@@@@@@@@@@@@@     @@@@@@                         
                        .@@@@@@@%     @@@@@@@@@@@@   ######*   @@@@@+        %@@@@         @@@@@+  =######   @@@@@@@@@@@@+    :@@@@@@@@                          
                         *@@@@@@@@@@     @@@@@@@@@%  *####*   @@@@@+         %@@@@          @@@@@-   #####  :@@@@@@@@@     #@@@@@@@@@@                           
                          =@@@@@@@@@@@@:    =@@@@@@  .###*   @@@@@           %@@@@           @@@@@@   ###*  @@@@@@@     @@@@@@@@@@@@@                            
                           #@@@@@@@@@@@@@@*     @@@   ##=   @@@@@            %@@@@            %@@@@@   ##   @@@+    .@@@@@@@@@@@@@@@                             
                            @@@@@@@@@@@@@@@@@@     @  #.  .@@@@@             @@@@@             =@@@@@   #        #@@@@@@@@@@@@@@@@@                              
                             %@@@@@@@@@@@@@@@@@@@.    -  *@@@@@           @@@@@@@@@@@+          -@@@@@        @@@@@@@@@@@@@@@@@@@@                               
                              @@@@@@@@@@@@@:        =   #@@@@@        +@@@@@@@@@@@@@@@@@@         @@@@@   +         @@@@@@@@@@@@@                                
                               @@@          ***#####   @@@@@%      @@@@@@@@@       @@@@@@@@@+      @@@@@   *#####**.         %@@                                 
                                    *#############*   @@@@@@   +@@@@@@@@@              @@@@@@@@@    @@@@@   :##############+                                     
                           :*####################*   @@@@@- @@@@@@@@@                     #@@@@@@@@* @@@@@@   #####################*                             
                    +*##########################+   @@@@@@@@@@@@@+                            @@@@@@@@@@@@@#   *#########################**                      
                           =*##################.   @@@@@@@@@@@                                   -@@@@@@@@@@@   ##################**.                            
                                  +*##########   .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   *##########*                                    
                                         +*#*   =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   *##*                                           

                                                                                                                                                              
        `;
    textElement.classList.remove('hidden');

    function displayFakeCode() {
        const fakeCodeElement = document.getElementById('fake-code');
        const fakeLines = [
            "Initializing system...",
            "Loading modules...",
            "Establishing connection...",
            "Fetching data...",
            "ERR: Failed to load data.",
            "ERR: Failed to load data.",
            "Data fetched.",
            "Establishing connection to VN...",
            "Processing...",
            "Complete.",
            "Connectrion to user: DRK618."
        ];

        let lineIndex = 0;
        
        function typeFakeLines() {
            if (lineIndex < fakeLines.length) {
                fakeCodeElement.innerText += fakeLines[lineIndex] + '\n';
                lineIndex++;
                setTimeout(typeFakeLines, 500); // Vitesse d'affichage des lignes de code
            } else {
                setTimeout(function() {
                    fakeCodeElement.innerText = ""; // Efface les lignes de faux code
                    displayLogo();
                }, 500); // Pause avant d'effacer et d'afficher le logo
            }
        }

        typeFakeLines();
    }

    function displayLogo() {
        const logoMusic = document.getElementById('logoMusic');
        logoMusic.play();
        
        textElement.innerText = text;
        textElement.style.opacity = 1; // Applique l'effet de fondu
        setTimeout(displayAdditionalText, 2000); // Pause avant d'afficher le texte supplémentaire
    }

    function displayAdditionalText() {
        const additionalTextElement = document.getElementById('additional-text');
        const additionalText = [
            "Welcome Back Derek.",
            "For assistance, type 'HELP'.",
            "Press [ESC] to exit."
        ];

        let textIndex = 0;
        additionalTextElement.classList.remove('hidden');
        
        function typeAdditionalText() {
            if (textIndex < additionalText.length) {
                additionalTextElement.innerHTML += highlightRed(additionalText[textIndex]) + '\n';
                textIndex++;
                setTimeout(typeAdditionalText, 1000); // Vitesse d'affichage du texte supplémentaire
            } else {
                showCommandInput(); // Affiche le champ de commande une fois que tout le texte est affiché
            }
        }

        typeAdditionalText();
    }

    function showCommandInput() {
        const inputElement = document.getElementById('commandInput');
        inputElement.classList.remove('hidden');
        inputElement.focus();
    }

    function highlightRed(text) {
        const wordsToHighlight = ["ERROR", "ALERT", "WARNING"];
        let highlightedText = text;

        wordsToHighlight.forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, 'g');
            highlightedText = highlightedText.replace(regex, `<span class='red'>${word}</span>`);
        });

        return highlightedText;
    }

    displayFakeCode();
});

const logs = [
    { name: "ENTRY-DRK618-025-6013-04-17.LOG", content: "Les derniers jours ont été particulièrement éprouvants. Le Dr William Harp, notre cher directeur de projet, ne cesse de nous pousser au-delà de nos limites. Selon lui, nous ne progressons pas assez vite, pas au rythme qu'exige la grandeur de notre mission, comme il aime tant le répéter. Il semble persuadé que les tests d'intégration doivent commencer le mois prochain, mais je ne peux m'empêcher de penser que c'est précipité, voire carrément risqué. Nous ne sommes pas encore prêts. Harp ne comprend pas que forcer les choses pourrait entraîner des conséquences imprévisibles. L'équipe est fatiguée, épuisée même. Les ingénieurs manquent de sommeil, et la tension est palpable à chaque coin de la station. Mais Harp n'en démord pas, il veut avancer coûte que coûte, et je crains que nous n'ayons guère le choix. L'intégration commence bientôt, que nous soyons prêts ou non." },
    { name: "ENTRY-DRK618-027-6013-05-15.LOG", content: "Incroyable. Je dois admettre que ce vieux fou de Harp avait peut-être raison après tout. Nous avons finalisé notre première intégration il y a quelques jours, et contre toute attente, elle a été couronnée de succès. La période d'activation n'a duré que quelques minutes, mais c'était suffisant pour valider nos hypothèses initiales. Une réussite. Harp nous a poussés au-delà de nos limites, et bien que ce soit difficile à admettre, il a eu raison de le faire. L'équipe semble revigorée par cette réussite. Pour la première fois depuis longtemps, je ressens un peu d'espoir quant à l'avenir de notre travail ici. Si nous continuons sur cette lancée, nous pourrions commencer des intégrations complètes d'ici l'année prochaine." },
    { name: "ENTRY-DRK618-036-6013-10-08.LOG", content: "Cinq mois après notre première intégration réussie, les choses avancent. Malgré la pression qui ne cesse de croître, je dois dire que l'ambiance reste supportable, en grande partie grâce à mes pauses avec les gars de la Station Echo. Ils ne travaillent pas directement sur notre projet, mais c'est agréable de discuter avec eux quand on a un moment pour souffler. Marlik et Getz, en particulier, sont de bonne compagnie. Ils ont un humour qui fait du bien dans un endroit aussi oppressant que celui-ci. Cela dit, tout n'est pas aussi simple. Le Dr Adam Fältskog a récemment débarqué dans le secteur Charlie, et je ne suis pas vraiment à l'aise avec lui. Il est... distant, presque glacial dans son comportement. Il ne parle presque jamais aux autres et semble toujours perdu dans ses pensées. Je ne sais pas encore quoi en penser, mais quelque chose en lui me dérange profondément. Peut-être que je m'inquiète pour rien, mais je vais rester sur mes gardes." },
    { name: "ENTRY-DRK618-042-6014-03-04.LOG", content: "Les infrastructures commencent à montrer des signes inquiétants d'instabilité. La houle de la mer de méthane devient un véritable cauchemar à gérer. Il y a deux jours, nous avons perdu quelques relais en surface, et cela a coupé les communications avec les plateformes situées à plusieurs kilomètres d'ici. Trois jours se sont écoulés avant que quelqu'un ne vienne enfin s'occuper des réparations. Trois jours sans aucune nouvelle du reste de l'équipe, complètement isolés. En utilisant la commande ALPHA_R012_SONAR, j'ai réussi à accéder aux sonars de la base et à suivre les mouvements des équipes en temps réel grâce à leurs balises. Jour et nuit, je gardais les yeux fixés sur ces points mouvants, espérant désespérément que l'un d'entre eux se dirige enfin vers le Secteur Charlie. Et ce n'est qu'aujourd'hui que quelqu'un est venu pour rétablir les communications, mais cette panne soudaine m'a laissé un goût amer. Nous sommes sur une poudrière ici, et il suffit d'une seule étincelle pour tout faire exploser. Je commence à me demander si nous n'avons pas surestimé notre capacité à maintenir cette base opérationnelle sur le long terme." },
    { name: "ENTRY-DRK618-048-6014-12-22.LOG", content: "Au début, nous avons pensé qu'il s'agissait d'un simple accident. Il y a quelques semaines, un membre de l'équipe de surface est tombé dans la mer de méthane. Une tragédie isolée, un incident dû à l'épuisement ou à un moment d'inattention. Mais lorsque d'autres ont commencé à suivre, presque comme des papillons de nuit attirés par une flamme, le doute a commencé à s'immiscer. Ce n'était plus une coïncidence. Puis, cet après-midi, tout a basculé. Les communications interplanétaires ont été brusquement interrompues. Aucune explication. Nous avons perdu tout contact avec les autres planètes, les autres systèmes. Nous sommes désormais complètement isolés sur ce caillou. Plus aucun signal ne passe. Cela fait plusieurs heures que les techniciens inspectent les relais extérieurs sans succès. Le Directeur tente de calmer les esprits avec ses discours rassurants, mais j'ai eu une conversation avec García, l'un des techniciens du relais. Il doute que le problème vienne de notre antenne ; il pense qu'il n'y a tout simplement aucun autre signal disponible. La panique n'est pas encore palpable, mais elle se fait sentir sous la surface. Les discussions deviennent de plus en plus tendues, les regards se détournent. Certains collègues affichent des comportements étranges, des signes de dérangement que je n'avais jamais observés auparavant. Ils se tiennent immobiles, les yeux perdus, comme s'ils étaient pris dans un tourbillon de pensées incohérentes. Si cette saloperie nous a vraiment atteints ici aussi, nous pourrions bien être en train de perdre le contrôle."},
    { name: "ENTRY-DRK618-054-6015-07-23.LOG", content: "V, Le temps nous est compté. J'ai fait tout ce que j'ai pu, mais je ne sais combien de temps il me reste avant que cette saloperie ne m'emporte. Si je ne parviens pas à mener cette tâche à bien, je te demande de sauver ceux qui le peuvent encore. J'ai vraiment tout essayé. Je t'accorde la majorité des accès ADMIN. Ne les laisse pas tomber. - Derek"},
    { name: "<span class='red'>ERROR: 48 files are corrupted and could not be saved. Contact system admin if issue persists.</span>"},
    // Ajoutez plus de logs si nécessaire
];

document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("commandInput");
    var terminalOutput = document.getElementById("terminalOutput");

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleCommand();
        }
    });
});

function handleCommand() {
    var input = document.getElementById("commandInput");
    var terminalOutput = document.getElementById("terminalOutput");
    var command = input.value.trim().toUpperCase();
    var commandOutput = "";

    if (command === "LIST LOGS") {
        commandOutput = "Available logs:\n";
        for (var i = 0; i < logs.length; i++) {
            commandOutput += "- " + logs[i].name + "\n";
        }
    } else if (command.startsWith("READ ")) {
        var fileName = command.substring(5).trim();
        var fileContent = logs.find(log => log.name === fileName)?.content;
        if (fileContent) {
            commandOutput = "Reading file: " + fileName + "\n" + wrapText(fileContent, 60);
        } else {
            commandOutput = "File not found: " + fileName;
        }
    } else if (command === "HELP") {
        commandOutput = "Main commands:\n";
        commandOutput += "- LIST LOGS : Lists available logs.\n";
        commandOutput += "- READ [FILENAME] : Reads the content of the specified log.\n";
        commandOutput += "- CLEAR : Clear the terminal screen.\n";
        commandOutput += "- INFO : Display information about this terminal.\n";
    } else if (command === "CLEAR") {
        terminalOutput.innerHTML = "";
        input.value = "";
        return; // Ne pas afficher le message "Unknown Command"
    } else if (command === "INFO") {
        commandOutput = "Terminal version 1.0. All systems operational.\n\n";
        commandOutput += "---------------------------------------------\n\n";
        commandOutput += "Session Owner: Derek Ramani\n\n";
        commandOutput += "User ID: DRK618\n\n";
        commandOutput += "Clearance Level: 3\n\n";
        commandOutput += "Last Connection: 6015-07-23T23:52:00Z";
    } else if (command === "REROUTE_POWER_TO_ZONE_C3") {
        commandOutput = "<span class='red'>SYSTEM ALERT:</span> Ventilation system offline\n\n";
        commandOutput += "[Initiating diagnostic for main power grid]\n\n";
        commandOutput += "<span class='orange'>AUTO_RES: Repair team dispatched to investigate</span>\n\n";
        commandOutput += "<span class='orange'>AUTO_RES: Estimated repair time: ?!#9 hours</span>";
    } else if (command === "KEYGEN") {
        generateKey();
    } else if (command === "DISPLAY_GROUP_655C3") {
            displayGroup655C3();
            return;
    } else if (command === "DATE") {
        commandOutput = "6015-07-24T00:45:00Z";
    } else if (command === "FORCE_SHUTDOWN") {
            initiateShutdown();
            return;
    } else if (command === "ALPHA_R012_SONAR") {
            window.location.href = "SONARD.html"; // Change this to the actual URL of the new page
            return;
    } else if (command === "ASSIMILATE_IMPROVE_DUPLICATE") {
        glitchEffect();
        return; // Ne pas afficher le message "Unknown Command"
    } else {
        commandOutput = "Unknown Command.";
    }

    // Affichez la sortie de la commande dans le terminal
    if (commandOutput) {
        terminalOutput.innerHTML += "<p>&gt; " + command + "</p>";
        terminalOutput.innerHTML += "<pre id='commandResult'>" + commandOutput + "</pre>";
    }

    // Effacez la saisie de l'utilisateur
    input.value = "";

    // Faites défiler jusqu'en bas du terminal
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function generateKey() {
    terminalOutput.innerHTML += "<p>&gt; KEYGEN</p>";
    const keygenText = document.createElement("div");
    keygenText.className = "keygen-text";
    terminalOutput.appendChild(keygenText);
    const keyCharacters = "YjWF15fMAvCzf8h334M04IwhKzLSokek9KuewPhU0rhucAH5HjiVr8pEDfB5TjQw";
    const finalKey = "b975c375fbd245f7e8f879650c4bf11224307321a346c1c1e43e0280f4ac7d20";
    let charIndex = 0;
    function typeKeygen() {
        if (charIndex < finalKey.length) {
            keygenText.innerText += keyCharacters.charAt(Math.floor(Math.random() * keyCharacters.length));
            charIndex++;
            setTimeout(typeKeygen, 50);
        } else {
            keygenText.innerText = finalKey;
        }
    }
    typeKeygen();
}

function displayGroup655C3() {
    terminalOutput.innerHTML += "<p>&gt; DISPLAY_GROUP_655C3</p>";
    const candidates = [
        {
            id: "655-0001",
            name: "CAN-U-655-1",
            location: "Z_C3",
            status: "DISCONNECTED",
            gender: "MALE",
            age: 26,
            mentStatus: "STABLE"
        },
        {
            id: "655-0002",
            name: "CAN-U-655-2",
            location: "Z_C3",
            status: "DISCONNECTED",
            gender: "FEMALE",
            age: 32,
            mentStatus: "STABLE"
        },
        {
            id: "655-0003",
            name: "CAN-U-655-3",
            location: "Z_C3",
            status: "DISCONNECTED",
            gender: "MALE",
            age: 35,
            mentStatus: "STABLE"
        }
    ];

    candidates.forEach(candidate => {
        terminalOutput.innerHTML += `
            <pre>
CAN NAME: ${candidate.name}
LOCATION: ${candidate.location}
CONNECTION STATUS: ${candidate.status}
POD ID: ${candidate.id}
CAN AGE: ${candidate.age}
USER GENDER: ${candidate.gender}
VITALS: N/A
MENT STATUS: ${candidate.mentStatus}
            </pre>`;
    });
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function glitchEffect() {
    const textElement = document.getElementById('ascii-art');
    textElement.classList.add('glitch');

    const terminalOutput = document.getElementById("terminalOutput");
    terminalOutput.innerHTML += "<p>&gt; ASSIMILATE_IMPROVE_DUPLICATE</p>";

    setTimeout(() => {
        const errorMessages = [
            "<span class='red'>ERROR:</span> Critical system failure",
            "<span class='red'>ERROR:</span> Data corruption detected",
            "<span class='red'>ERROR:</span> Reboot required"
        ];
        
        errorMessages.forEach((msg, index) => {
            setTimeout(() => {
                terminalOutput.innerHTML += `<pre>${msg}</pre>`;
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, 1000 * (index + 1));
        });
    }, 1000);
}

function wrapText(text, maxLength) {
    var words = text.split(" ");
    var lines = [];
    var currentLine = "";

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (currentLine.length + word.length + 1 <= maxLength) {
            // Ajoute le mot à la ligne actuelle
            if (currentLine.length > 0) {
                currentLine += " ";
            }
            currentLine += word;
        } else {
            // La ligne actuelle est pleine, ajoutez-la aux lignes et commencez une nouvelle ligne
            lines.push(currentLine);
            currentLine = word;
        }
    }

    // Ajoutez la dernière ligne si elle n'est pas vide
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    // Joindre les lignes en un seul texte avec des sauts de ligne
    return lines.join("\n");
}

