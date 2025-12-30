# 🖼️ 나의 이미지 갤러리

백엔드와 프론트엔드를 연결한 이미지 갤러리 웹사이트입니다.

## 🎯 기능

- 🐶 **강아지 사진**: Dog CEO API에서 랜덤 강아지 사진
- 🐱 **고양이 사진**: The Cat API에서 랜덤 고양이 사진  
- 🌄 **자연 사진**: Picsum Photos에서 아름다운 자연/풍경 사진
- 🎲 **랜덤 사진**: 위 3가지 중 무작위로 선택

## 📦 필요한 패키지

```bash
npm install express cors
```

## 🚀 실행 방법

### 1. 백엔드 서버 실행

```bash
node server.js
```

서버가 `http://localhost:3000`에서 실행됩니다.

### 2. 프론트엔드 실행

`index.html` 파일을 브라우저에서 열거나, Live Server 등을 사용하세요.

## 🔧 API 엔드포인트

### GET `/api/photo?type={type}`

이미지를 가져오는 메인 API입니다.

**파라미터:**
- `type`: `dog`, `cat`, `nature`, `random` 중 하나

**응답 예시:**
```json
{
  "success": true,
  "type": "dog",
  "imageUrl": "https://images.dog.ceo/breeds/..."
}
```

### GET `/api/data` (기존 호환성)

기존 강아지 API 엔드포인트 (하위 호환성 유지)

## 📝 사용된 무료 API

1. **Dog CEO API** - https://dog.ceo/dog-api/
   - 무료, 인증 불필요
   - 다양한 강아지 품종 사진

2. **The Cat API** - https://thecatapi.com/
   - 무료 (제한적), 인증 불필요
   - 고양이 사진

3. **Picsum Photos** - https://picsum.photos/
   - 무료, 인증 불필요
   - Lorem Ipsum 스타일의 무료 사진 서비스

## ⚡ 개선 사항

기존 코드 대비:
- ✅ 여러 종류의 이미지 지원
- ✅ 깔끔한 UI/UX 디자인
- ✅ 로딩 상태 표시
- ✅ 에러 처리
- ✅ 애니메이션 효과
- ✅ 반응형 디자인

## 🎨 커스터마이징

더 많은 이미지 소스를 추가하고 싶다면:

- **Unsplash API**: 고품질 무료 사진 (API 키 필요)
- **Pexels API**: 무료 스톡 사진 (API 키 필요)
- **NASA API**: 우주 사진 (API 키 필요)

## 📄 라이선스

모든 이미지는 각 API의 라이선스를 따릅니다.
- Dog CEO API: Public Domain
- The Cat API: Free to use
- Picsum Photos: Free to use

---

만든 날짜: 2025년 12월 30일
