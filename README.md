# readme

## 사이퍼즈 스트리머 랭크 위젯

<aside>
➡️ [https://cyptools.xyz](https://cyptools.xyz)

</aside>

롤 스트리머들의 경우 본인의 티어를 나타내는 위젯이 있는 반면, 사이퍼즈 스트리머는 텍스트로 현재 점수를 나타내거나, 표기하지 않는 경우가 많습니다.

~~스트리머가 얼마 없는 것은 둘째치고요~~

그래서 만들었습니다.

**사이퍼즈 스트리머 랭크 위젯**

![](https://velog.velcdn.com/images/planethoon/post/ad2117a2-4b66-48ed-b379-89b268dc4042/image.png)
(첫화면)

기능은 슈퍼 심플합니다.

![](https://velog.velcdn.com/images/planethoon/post/cdc7e330-794e-4434-beaf-c896393cc699/image.png)

닉네임을 입력란에 입력하고, 적용 버튼을 누르면 확인하고자 하는 유저의 닉네임과 현재 티어 및 점수가 표기됩니다.

![](https://velog.velcdn.com/images/planethoon/post/83670ad5-8bac-4aa9-8b1c-fcd21580911d/image.png)

이후, 미리보기 상단의 링크 복사 버튼을 클릭해 위젯의 URL을 복사합니다.

거의 다 왔습니다!

![](https://velog.velcdn.com/images/planethoon/post/f0de70b3-1808-43eb-974a-6f7108ed7c2f/image.png)

다음으로 obs studio를 실행한 후 소스 목록에서 브라우저를 추가합니다.

![](https://velog.velcdn.com/images/planethoon/post/01068119-8f10-4c8a-adc4-24587222275a/image.png)

원하는 소스 이름을 입력하시고 다음으로 넘어가주세요.

![](https://velog.velcdn.com/images/planethoon/post/e2be24ce-54d7-4898-92ac-ab35417ce458/image.png)

URL 입력란에 아까 복사한 주소를 붙여넣습니다.

너비와 높이는 각각 300, 150을 입력한 후 우측 하단의 확인버튼을 눌러주세요.

![](https://velog.velcdn.com/images/planethoon/post/ec7370db-d21b-4977-902a-7d0acddea352/image.png)

해당 위젯을 드래그해 원하는 위치로 이동시켜주시면 끝입니다!

너무 쉽다 그죠?

마지막으로 두 가지 주의점 알려드립니다.

랭크위젯은 3분마다 자동적으로 업데이트됩니다.

즉, 공식 승리, 패배 결과가 종료 직후에 바로 반영되지 않습니다.

API 제한이 있어서 사실 5분으로 했다가, 스트리머가 얼마 없어서… 초과 안(못)될 것 같아 3분으로 줄였습니다.
~~이 부분은 추이를 지켜보다가 일정 시간이 지난 후에 1분까지 줄이겠습니다.~~
+7/20 추가) 1분으로 수정했습니다.

서버를 위탁으로 돌려서 데이터를 받아오는 속도가 조금 느립니다.
초기 로딩만 이해해주시면 이후에 체감은 안되실거에요.

cyptools로 도메인을 산 이유는.. 랭크 위젯을 시작으로 하나 둘 기능을 추가해보려고 생각 중이기 때문입니다.

사용해보시다가 오류가 발생하거나, 제안주실 점이 있으시다면, 하단의 메일로 전달 부탁드려요.

감사합니다.
