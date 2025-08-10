document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(
    ['firstName', 'lastName', 'email', 'phone', 'linkedin', 'company', 'roleDesc', 'timeEmployer', 'education'],
    (data) => {
      document.getElementById('firstName').value = data.firstName || '';
      document.getElementById('lastName').value = data.lastName || '';
      document.getElementById('email').value = data.email || '';
      document.getElementById('phone').value = data.phone || '';
      document.getElementById('linkedin').value = data.linkedin || '';
      document.getElementById('company').value = data.company || '';
      document.getElementById('roleDesc').value = data.roleDesc || '';
      document.getElementById('timeEmployer').value = data.timeEmployer || '';
      document.getElementById('education').value = data.education || '';
    }
  );
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const profileData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    linkedin: document.getElementById('linkedin').value,
    company: document.getElementById('company').value,
    roleDesc: document.getElementById('roleDesc').value,
    timeEmployer: document.getElementById('timeEmployer').value,
    education: document.getElementById('education').value
  };

  chrome.storage.sync.set(profileData, () => {
    document.getElementById('status').innerText = 'Profile saved!';
    setTimeout(() => {
      document.getElementById('status').innerText = '';
    }, 2000);
  });
});
