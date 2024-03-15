document.write(`
<!DOCTYPE html>
<html>
<head>
    <style>
        .background-box {
            background-color: black;
            position: fixed;
            border: 2px solid #333;
            left: 22.8%;
            width: 1232px;
            height: 100%;
	    z-index: -1;
        }
        hr {
            height: 50px;
            width: 1232px;
            background-color: #333;
            border: none;
            margin: 5px;
            border: 2px solid #000;
        }
        h1 {
            text-align:center;
            color: white;
            font-family: Lato;
            font-size: 80px;
            padding: 20px;
            margin: 0 auto;
            background-color: black;
            border-radius: 10px;
            border: 2px solid #333;
	    width: 600px;
        }
        h2 {
            text-align: center;
            color: thistle;
            font-family: Times New Roman;
            font-style: italic;
            font-size: 37px;
            background-color: black;
            width: 200px;
            padding: 20px;
            margin: 0 auto;
            border-radius: 10px;
            border: 2px solid #333;
        }
        h3 {
            text-align: center;
            color: blanchedalmond;
            font-family: Arial;
            font-size: 26px;
            background-color: black;
            width: 200px;
            padding: 20px;
            margin: 0 auto;
            border-radius: 10px;
            border: 2px solid #333;
        }
        h4 {
            text-align: center;
            color: grey;
            font-family: Nunito Sans;
            font-size: 18px;
            background-color: black;
            width: 400px;
            padding: 10px;
            margin: 0 auto;
            border-radius: 10px;
            border: 2px solid #333;
        }
        p {
            color: white;
            text-align: right;
            font-family: Arial;
            border: 2px solid #333;
            padding: 6px;
            width: 1000px;
            margin: 0 auto;
            background-color: black;
            border-radius: 10px;
        }
        .content {
            margin-left: 200px;
            position: relative;
            padding: 20px;
        }
        .image-zoom {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease-in-out;
        }
            .image-zoom.active {
                opacity: 1;
                pointer-events: auto;
            }
            .image-zoom img {
                max-width: 90%;
                max-height: 90%;
            }
        header {
            background-color: #333;
            border: 2px solid #000;
            border-radius: 5px;
            padding: 0px;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            z-index: 999;
        }
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        nav li {
            margin-bottom: 10px;
            margin-top: 10px;
        }
            nav li a {
                display: block;
                font-family: Raleway;
                border: 2px solid #000;
                border-radius: 5px;
                color: white;
                text-align: center;
                padding: 10px;
                text-decoration: none;
            }
                nav li a:hover {
                    background-color: #111;
                }
        .generated-links {
            position: absolute;
            left: 100%;
            top: 0;
            display: none;
        }
        .tab:hover .generated-links {
            display: block;
        }
        .generated-links li {
            margin-bottom: 5px;
        }
        .generated-links a {
            display: block;
            font-family: Arial;
            color: white;
            text-align: center;
            padding: 5px;
            text-decoration: none;
            background-color: #222;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            border: 2px solid white;
            padding: 1px
        }
        th, td {
            color: white;
            font-family: Roboto;
            text-align: center;
            border: 2px solid black;
            padding: 1px;
            margin: 0 auto;
            background-color: black;
            border: 2px solid white;
        }
        th {
            color: white;
            font-family: Times New Roman;
            font-size: 37px;
            text-align: center;
            border: 2px solid black;
            padding: 1px;
            margin: 0 auto;
            background-color: black;
            border: 2px solid white;
        }
        #promoTab {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #007bff;
            color: #fff;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
            font-size: 20px;
        }
        #socialLinks {
            display: none;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            font-size: 10px;
        }
        #promoTab:hover #socialLinks {
            display: flex;
            background-color: #0c33ee;
            color: darkorchid;
        }
        #socialLinks a {
            text-decoration: none;
            color: #fff;
        }
        .search-container {
            display: inline-block;
            position: fixed;
            left: 175px;
            top: 5px;
        }
        .search-icon {
            width: 40px;
            height: 40px;
            cursor: pointer;
        }
        .search-bar {
            width: 0;
            padding: 5px 10px;
            border: none;
            background: transparent;
            color: white;
            transition: width 0.4s ease-in-out;
            position: absolute;
            top: 10px;
            left: 45px;
            border-bottom: 1px solid white;
        }
        .search-container:hover {
            width: 220px
        }
        .search-container:hover .search-bar {
            width: 150px; 
        }
        #searchResults {
            position: absolute;
            top: 100%;
            left: 0;
            max-height: 600px;
            max-width: 400px;
            overflow-y: auto;
            overflow-x: auto;
            background-color: black;
            border: 1px solid #ddd;
            display: none;
            padding: 10px;
        }
            #searchResults p {
                margin: 5px 0;
                width: 600px;
            }
        .search-container:focus-within #searchResults {
            display: block;
        }
        mark {
            background-color: black;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li class="tab">
                    <a href="../index.html">Home</a>
                </li>
                <li class="tab">
                    <a href="../Objects/objectswiki.html">Objects</a>
                </li>
                <li class="tab">
                    <a href="../Entities/entitieswiki.html">Entities</a>
                </li>
                <li class="tab">
                    <a>Worlds</a>
                    <ul class="generated-links">
                        <li><a href="../Worlds/testlevelswiki.html">Test Levels</a></li>
                        <li><a href="../Worlds/anomalyworldswiki.html">Anomaly Worlds</a></li>
                        <li><a href="../Worlds/otherworldswiki.html">Other Worlds</a></li>
                    </ul>
                </li>
                <li class="tab">
                    <a>Signals</a>
                    <ul class="generated-links">
                        <li><a href="../Signals/deepspacesigswiki.html">Deep Space Signals</a></li>
                        <li><a href="../Signals/planetsigswiki.html">Planet Signals</a></li>
                        <li><a href="../Signals/specialsigswiki.html">Special Signals</a></li>
                        <li><a href="../Signals/siggensigswiki.html">Sig Gen Signals</a></li>
                        <li><a href="../Signals/othersigswiki.html">Other Signals</a></li>
                    </ul>
                </li>
                <li class="tab">
                    <a>Events</a>
                    <ul class="generated-links">
                        <li><a href="../Events/storymodeeventswiki.html">Storymode Events</a></li>
                        <li><a href="../Events/ariralrepeventswiki.html">Ariral Rep Events</a></li>
                        <li><a href="../Events/triggerableeventswiki.html">Triggerable Events</a></li>
                        <li><a href="../Events/randomeventswiki.html">Random Events</a></li>
                        <li><a href="../Events/333ameventswiki.html">3:33 AM Events</a></li>
                    </ul>
                </li>
                <li class="tab">
                    <a href="../Structures/structureswiki.html">Structures</a>
                </li>
                <li class="tab">
                    <a href="../ConsoleCommands/consolecommandswiki.html">Console Commands</a>
                </li>
                <li class="tab">
                    <a href="../Dreams/dreamswiki.html">Dreams</a>
                </li>
                <li class="tab">
                    <a href="../Achievements/achievementswiki.html">Achievements</a>
                </li>
                <li class="tab">
                    <a href="../GameEndings/endingswiki.html">Game Endings</a>
                </li>
                <li class="tab">
                    <a href="../InteractiveMap/interactablemap.html">Map of Everything</a>
                </li>
                <li class="tab">
                    <a style="border: 1px solid #333; border-radius: 5px;" onmouseover="this.style.backgroundColor='#333';" onmouseout="this.style.backgroundColor='transparent';"></a>
                </li>
                <li class="tab">
                    <a style="border: 1px solid #333; border-radius: 5px;" onmouseover="this.style.backgroundColor='#333';" onmouseout="this.style.backgroundColor='transparent';"></a>
                </li>
                <li class="tab">
                    <a style="border: 1px solid #333; border-radius: 5px;" onmouseover="this.style.backgroundColor='#333';" onmouseout="this.style.backgroundColor='transparent';"></a>
                </li>
                <li class="tab">
                    <a style="border: 1px solid #333; border-radius: 5px;" onmouseover="this.style.backgroundColor='#333';" onmouseout="this.style.backgroundColor='transparent';"></a>
                </li>
                <li class="tab">
                    <a style="border: 1px solid #333; border-radius: 5px;" onmouseover="this.style.backgroundColor='#333';" onmouseout="this.style.backgroundColor='transparent';"></a>
                </li>
                <li class="tab">
                    <a style="color:red; font-size: 17px;" onmouseover="this.style.backgroundColor='#333';" onmouseout="this.style.backgroundColor='transparent';"><b>Last Updated: 0.7.0</b></a>
                </li>
            </ul>
            <div id="promoTab">
                <div id="socialLinks">
                    <a href="https://github.com/SquareZeb" target="_blank">Github</a>
                    <a href="https://www.youtube.com/channel/UCSPSGIg3wWMowzCL-1tc_Hg" target="_blank">Youtube</a>
                    <a href="https://discord.gg/vzkMs8sH2z" target="_blank">Discord</a>
                </div>
                <img src="../Images/Promo.png" alt="Social Icon" width="30" height="30" style="border-radius: 50%">
                Created by: <span style="color: lawngreen;">Square</span><span style="color: aqua;">Zeb</span>
            </div>
        </nav>
    </header>
</body>
</html>
`);
