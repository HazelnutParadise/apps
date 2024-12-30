

document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector(".background-animation");
    const cloudsCount = 12; // 您想生成的云的数量
    const rainDropsPerCloud = 100; // 每片云下的雨滴数量

    for (let c = 0; c < cloudsCount; c++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        background.appendChild(cloud);
        // 随机高度
        cloud.style.top = `${Math.random() * (window.innerHeight)}px`;
        // 为云随机设置一个水平位置
        const leftPosition = Math.random() * (window.innerWidth); // 假设云宽度最大为100px，以避免溢出屏幕
        cloud.style.left = `${leftPosition}px`;
        const animationDuration = 5 + Math.random() * 15; // 动画持续时间，10到20秒之间
        const animationDelay = Math.random() * -0.9; // 动画延迟，0到5秒之间
        cloud.style.animation = `moveCloud ${animationDuration}s linear ${animationDelay}s infinite`;


        for (let i = 0; i < rainDropsPerCloud; i++) {
            const rainDrop = document.createElement("div");
            rainDrop.classList.add("rain");
            // 随机生成雨滴的左边距（位置）
            const leftPos = 10 + Math.random() * 130; // 假设云的宽度约为200px
            // 随机生成动画延迟时间
            const animationDelay = Math.random() * -1.0; // 延迟时间范围

            rainDrop.style.left = `${10+leftPos}px`;
            rainDrop.style.animationDelay = `${animationDelay}s`;

            cloud.appendChild(rainDrop);
        }
    }
});
 
document.addEventListener('DOMContentLoaded', function() {
    let startGameButton = document.getElementById('startGameButton');
    let gameDashboard = document.getElementById('gameDashboard');

    startGameButton.addEventListener('click', function() {
        document.getElementById('startButtonContainer').style.display = 'none'; // 隐藏开始游戏按钮
        gameDashboard.style.display = 'flex'; // 显示游戏面板
        game()
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let startAgainButton = document.getElementById('startAgainButton');
    let gameDashboard = document.getElementById('gameDashboard');

    startAgainButton.addEventListener('click', function() {
        document.getElementById('game-over').style.display = 'none'; // 隐藏开始游戏按钮
        gameDashboard.style.display = 'flex'; // 显示游戏面板
        score = 0;
        aready_answer = false;
        ans = '';
        gameOver = false;
        game()
    });
});

let score = 0;
let aready_answer = false;
let ans = '';
let gameOver = false;

function correct() {
    score++;
    document.getElementById('current-score').innerText = score;
    alert("恭喜答對！");
}

// 定义事件监听器函数
function sunnyClickListener() {
    if(!aready_answer) { // 检查是否已经回答
        if(ans.includes('sunny') || ans.includes('clear')) {
            correct();
        }else {
            gameOver = true;
        }
        aready_answer = true;
    }
}

function cloudyClickListener() {
    if(!aready_answer) { // 检查是否已经回答
        if(ans.includes('cloud') || ans.includes('overcast') || ans.includes('mist')) {
            correct();
        }else {
            gameOver = true;
        }
        aready_answer = true;
    }
}

function rainyClickListener() {
    if(!aready_answer) { // 检查是否已经回答
        if(ans.includes('rain')) {
            correct();
        }else {
            gameOver = true;
        }
        aready_answer = true;
    }
}

function snowyClickListener() {
    if(!aready_answer) { // 检查是否已经回答
        if(ans.includes('snow')) {
            correct();
        }else {
            gameOver = true;
        }
        aready_answer = true;
    }
}


async function game() {
    if (gameOver) {
        gameDashboard.style.display = 'none';
        document.getElementById('game-over').style.display = "flex";
        document.getElementById("final-score").innerText = score;
        return
    }
    aready_answer = false;
    let current_score_el = document.getElementById('current-score');
    current_score_el.innerText = score

    try {
        function fetch_data() {
            
        }
        let response = await fetch('https://server.hazelnut-paradise.com/RS/random-city1000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        let cityName = data['city'];
        let countryCode = data['country_code'];

        let weather_res = await fetch('https://server.hazelnut-paradise.com/API/weather_info',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'location': cityName})
        });
        
        if (!weather_res.ok) {
            throw new Error(`HTTP error! status: ${weather_res.status}`);
        }

        let weather_info = await weather_res.json();
        ans = weather_info['天氣狀況']
        ans = ans.toLowerCase()

        document.getElementById('city').innerText = cityName;
        document.getElementById('country').innerText = countryCode;
        // alert(ans)

        // 移除之前的监听器，防止重复
        document.getElementById('sunny').removeEventListener('click', sunnyClickListener);
        document.getElementById('cloudy').removeEventListener('click', cloudyClickListener);
        document.getElementById('rainy').removeEventListener('click', rainyClickListener);
        document.getElementById('snowy').removeEventListener('click', snowyClickListener);

        // 添加监听器
        document.getElementById('sunny').addEventListener('click', sunnyClickListener);
        document.getElementById('cloudy').addEventListener('click', cloudyClickListener);
        document.getElementById('rainy').addEventListener('click', rainyClickListener);
        document.getElementById('snowy').addEventListener('click', snowyClickListener);

        let timeleft = 20;
        // 在这里设置下一次游戏逻辑的调用
        let countdown = setInterval(function() {
            document.getElementById("now-time-left").innerText = timeleft;
            timeleft--;
            
            if (aready_answer == true) {
                clearInterval(countdown); // 停止倒计时
                game(); // 倒计时结束，调用game函数
            }else if (timeleft < 0) {
                gameOver = true;
                clearInterval(countdown);
                game();
            }
        }, 1000); // 每1000毫秒（即每秒）执行一次
    } catch (error) {
        console.error('Error fetching city:', error);
        game()
    }
}
