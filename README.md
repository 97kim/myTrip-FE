# myTrip-FE
여행어때 프로젝트 백엔드 프론트엔드 분리

## FE
- AWS S3에 올려 AWS Cloudfront와 연결
- CORS는 BE에서 flask의 flask_cors 모듈로 처리

링크: https://www.kimkj.shop/templates/index.html

<hr>

AWS Route 53에서 서브 도메인 추가 <br>
api .kimkj.shop -> ec2 인스턴스 (BE) <br>
www .kimkj.shop -> Cloudfront 배포 도메인 (FE)
