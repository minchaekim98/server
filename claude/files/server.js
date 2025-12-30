// server.js
const express = require('express');
const cors = require('cors');
const https = require('https');
const app = express();
const port = 3000;

app.use(cors());

// 외부 API 호출을 위한 헬퍼 함수
function fetchFromAPI(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// 메인 사진 API 엔드포인트
app.get('/api/photo', async (req, res) => {
    const type = req.query.type || 'dog';
    
    try {
        let imageUrl;
        
        switch(type) {
            case 'dog':
                // Dog CEO API - 무료, 인증 불필요
                const dogData = await fetchFromAPI('https://dog.ceo/api/breeds/image/random');
                imageUrl = dogData.message;
                break;
                
            case 'cat':
                // The Cat API - 무료, 인증 불필요 (제한적 사용)
                const catData = await fetchFromAPI('https://api.thecatapi.com/v1/images/search');
                imageUrl = catData[0].url;
                break;
                
            case 'nature':
                // Picsum Photos - Lorem Ipsum for photos, 무료
                // 랜덤 ID로 다양한 사진 제공
                const randomId = Math.floor(Math.random() * 1000);
                imageUrl = `https://picsum.photos/600/400?random=${randomId}`;
                break;
                
            case 'random':
                // 랜덤으로 위 3개 중 하나 선택
                const types = ['dog', 'cat', 'nature'];
                const randomType = types[Math.floor(Math.random() * types.length)];
                
                if (randomType === 'dog') {
                    const dogData = await fetchFromAPI('https://dog.ceo/api/breeds/image/random');
                    imageUrl = dogData.message;
                } else if (randomType === 'cat') {
                    const catData = await fetchFromAPI('https://api.thecatapi.com/v1/images/search');
                    imageUrl = catData[0].url;
                } else {
                    const randomId = Math.floor(Math.random() * 1000);
                    imageUrl = `https://picsum.photos/600/400?random=${randomId}`;
                }
                break;
                
            default:
                throw new Error('알 수 없는 이미지 타입입니다.');
        }
        
        res.json({
            success: true,
            type: type,
            imageUrl: imageUrl
        });
        
    } catch (error) {
        console.error('이미지 가져오기 실패:', error);
        res.status(500).json({
            success: false,
            error: '이미지를 가져오는데 실패했습니다.'
        });
    }
});

// 기존 엔드포인트도 유지 (하위 호환성)
app.get('/api/data', (req, res) => {
    res.json({
        imageUrl: "https://dog.ceo/api/breeds/image/random"
    });
});

app.listen(port, () => {
    console.log(`🚀 백엔드 서버가 ${port} 번 포트에서 실행중입니다!`);
    console.log(`📸 사진 API가 준비되었습니다!`);
    console.log(`\n사용 가능한 이미지 타입:`);
    console.log(`  - dog: 귀여운 강아지 🐶`);
    console.log(`  - cat: 귀여운 고양이 🐱`);
    console.log(`  - nature: 아름다운 자연 🌄`);
    console.log(`  - random: 랜덤 사진 🎲\n`);
});