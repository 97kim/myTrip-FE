function logout() {
    localStorage.removeItem('token')
    alert('로그아웃을 완료했습니다.')
    window.location.href = '../templates/index.html';
}