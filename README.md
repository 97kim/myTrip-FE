# myTrip-FE
여행어때 프로젝트 백엔드 프론트엔드 분리

## FE
S3에 올려 Cloudfront와 연결

CORS는 BE에서 flask의 flask_cors 모듈로 처리

https://trip.kimkj.shop/templates/index.html

route 53에서 서브 도메인 추가 <br>
www.kimkj.shop -> ec2 인스턴스 (BE) <br>
trip.kimkj.shop -> Cloudfront 배포 도메인 (FE)
