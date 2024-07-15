async function fetchUserInfo(): Promise<void> {
  const userIdInput = document.getElementById('userId') as HTMLInputElement;
  const userId = userIdInput.value;
  const loadingElement = document.getElementById('loading') as HTMLElement;
  const errorElement = document.getElementById('error') as HTMLElement;
  const userInfoElement = document.getElementById('userInfo') as HTMLElement;

  loadingElement.style.display = 'block';
  errorElement.textContent = '';
  userInfoElement.innerHTML = '';

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!response.ok) {
      throw new Error('ユーザー情報の取得に失敗しました');
    }

    const userData = await response.json();
    displayUserInfo(userData);
  } catch (error) {
    errorElement.textContent = `エラー: ${(error as Error).message}`;
  } finally {
    loadingElement.style.display = 'none';
  }
}

function displayUserInfo(userData: {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}): void {
  const userInfoElement = document.getElementById('userInfo') as HTMLElement;
  userInfoElement.innerHTML = `
        <h2>${userData.name}</h2>
        <p><strong>ユーザー名:</strong> ${userData.username}</p>
        <p><strong>メール:</strong> ${userData.email}</p>
        <p><strong>電話:</strong> ${userData.phone}</p>
        <p><strong>ウェブサイト:</strong> ${userData.website}</p>
      `;
}

document.addEventListener('DOMContentLoaded', () => {
  fetchUserInfo();
});
