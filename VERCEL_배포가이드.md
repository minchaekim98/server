# 🚀 Vercel 배포 가이드

이 프로젝트를 Vercel에 배포하는 방법입니다.

## 📁 프로젝트 구조

```
프로젝트폴더/
├── api/
│   └── photo.js          # 백엔드 API (Serverless Function)
├── index.html            # 프론트엔드
└── vercel.json          # Vercel 설정 파일
```

---

## 🎯 배포 방법 (3가지 중 선택)

### 방법 1: GitHub 연동 (추천! 가장 쉬움) ⭐

#### 1단계: GitHub에 코드 업로드

1. **GitHub 가입** (없으면)
   - https://github.com 접속
   - Sign up 클릭

2. **새 Repository 만들기**
   - GitHub 로그인
   - 오른쪽 상단 `+` 버튼 → `New repository`
   - Repository name: `image-gallery` (원하는 이름)
   - Public 선택
   - `Create repository` 클릭

3. **VS Code에서 GitHub에 업로드**

   VS Code에서 터미널 열고:
   ```bash
   # Git 초기화
   git init
   
   # 모든 파일 추가
   git add .
   
   # 커밋
   git commit -m "첫 배포"
   
   # GitHub 연결 (YOUR_USERNAME과 YOUR_REPO를 본인 것으로 변경)
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   
   # 업로드
   git branch -M main
   git push -u origin main
   ```

#### 2단계: Vercel에 배포

1. **Vercel 가입**
   - https://vercel.com 접속
   - `Sign Up` 클릭
   - `Continue with GitHub` 선택 (GitHub 계정으로 로그인)

2. **프로젝트 import**
   - Vercel 대시보드에서 `Add New...` → `Project` 클릭
   - GitHub에서 방금 만든 repository 선택
   - `Import` 클릭

3. **배포 설정**
   - Framework Preset: `Other` 선택
   - Root Directory: 그대로 둠 (변경 안 함)
   - `Deploy` 클릭!

4. **완료! 🎉**
   - 배포가 완료되면 URL이 나옵니다
   - 예: `https://your-project.vercel.app`
   - 이 주소를 친구들에게 공유하세요!

---

### 방법 2: Vercel CLI 사용

```bash
# Vercel CLI 설치
npm install -g vercel

# 로그인
vercel login

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

---

### 방법 3: 드래그 앤 드롭

1. 프로젝트 폴더 전체를 ZIP으로 압축
2. https://vercel.com/new 접속
3. ZIP 파일을 드래그 앤 드롭
4. `Deploy` 클릭

---

## 🔄 코드 수정 후 재배포

### GitHub 연동한 경우 (자동 배포!)

코드를 수정하고 GitHub에 푸시만 하면 **자동으로 재배포**됩니다:

```bash
git add .
git commit -m "수정 사항"
git push
```

→ Vercel이 자동으로 감지하고 새로 배포해줍니다!

---

## ✅ 배포 후 확인사항

1. **URL 접속**
   - Vercel이 준 URL로 접속
   - 예: `https://image-gallery-abc123.vercel.app`

2. **버튼 클릭 테스트**
   - 강아지, 고양이, 자연, 랜덤 버튼 모두 작동하는지 확인

3. **친구들과 공유**
   - URL을 카카오톡, 문자로 공유
   - 누구나 접속 가능!

---

## 🎨 커스텀 도메인 (선택사항)

무료로 `.vercel.app` 도메인을 사용할 수 있지만, 원한다면:

1. Vercel 프로젝트 설정
2. `Domains` 탭
3. 원하는 도메인 추가 (본인 소유 도메인 필요)

---

## 💡 팁

- **무료 요금제**로 충분히 사용 가능합니다
- **자동 HTTPS** 제공 (보안 연결)
- **빠른 CDN** (전 세계 어디서나 빠른 속도)
- **무제한 배포** (몇 번을 배포해도 무료)

---

## 🆘 문제 해결

### 배포는 되는데 API가 안 됨
- `vercel.json` 파일이 있는지 확인
- `api` 폴더에 `photo.js`가 있는지 확인

### GitHub 업로드가 안 됨
- Git이 설치되어 있는지 확인: `git --version`
- 없으면 https://git-scm.com 에서 설치

### 다른 문제
- Vercel 대시보드에서 `Logs` 확인
- 에러 메시지를 보고 문제 파악

---

만든 날짜: 2025년 12월 30일
배포 플랫폼: Vercel
