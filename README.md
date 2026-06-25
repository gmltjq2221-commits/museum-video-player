# 박물관 영상 플레이어 (GitHub Pages용)

## 기능
- 첫 화면에서 `1`, `2`, `3`, `4` 버튼으로 영상 선택
- 선택한 영상 재생
- 재생
- 일시정지
- 처음부터 재생
- 스피커 소리 조절
- 자동 반복 재생 없음
- 목록으로 돌아가기 버튼 없음

## 영상 넣는 방법
`videos` 폴더 안에 아래 이름으로 MP4 파일을 넣으세요.

```text
videos/video1.mp4
videos/video2.mp4
videos/video3.mp4
videos/video4.mp4
```

영상 파일명이 다르다면 `index.html` 안의 `data-video` 값을 수정하세요.

## GitHub Pages로 올리는 방법
1. GitHub에서 새 저장소를 만듭니다. 예: `museum-video-player`
2. 이 폴더 안의 파일들을 저장소 최상단에 업로드합니다.
3. GitHub 저장소에서 **Settings → Pages**를 엽니다.
4. **Build and deployment**의 Source를 **Deploy from a branch**로 선택합니다.
5. Branch는 `main`, 폴더는 `/(root)`를 선택하고 저장합니다.
6. 몇 분 뒤 다음과 비슷한 링크가 생성됩니다.

```text
https://깃허브아이디.github.io/museum-video-player/
```

## 실제 전시장 설치 팁
- 인터넷이 불안정하면 GitHub Pages 대신 태블릿 내부에 같은 폴더를 저장해 로컬 웹서버 또는 키오스크 앱으로 실행하는 편이 더 안정적입니다.
- Fully Kiosk Browser를 사용한다면 위 GitHub Pages 링크를 Start URL로 설정하세요.
- 영상 용량이 크면 GitHub Pages 대역폭과 저장소 용량을 먼저 확인하세요.
